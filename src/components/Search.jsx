'use client'

import { useEffect, useCallback, useState } from "react"
import axios from "axios";
import debounce from "@/utils/debounce";
export default function Search() {
    const [transcript, setTranscript] = useState('');
    const [lang, setLang] = useState('en');
    const [queryResults, setQueryResults] = useState([]);
    const [placeholder, setPlaceholder] = useState('loading');

    useEffect(() => {

        const MIMEtype = "audio/webm";

        const webSocketURL =
            lang === 'en'
                ? 'wss://api.deepgram.com/v1/listen?model=nova'
                : `wss://api.deepgram.com/v1/listen?model=base&language=${lang}`;

        const webSocket = new WebSocket(webSocketURL, [
            "token",
            process.env.NEXT_PUBLIC_SPEECH_KEY
        ]);

        navigator.mediaDevices.getUserMedia({ audio: true })
            .then((stream) => {
                if (!MediaRecorder.isTypeSupported(MIMEtype)) {
                    // error audio not supported
                }

                const mediaRecorder = new MediaRecorder(stream, {
                    mimeType: MIMEtype
                });

                webSocket.addEventListener('open', () => {
                    console.log('[socket]: connetction success');
                    setPlaceholder('say something');
                    mediaRecorder.addEventListener('dataavailable', (event) => {
                        if (webSocket.readyState === 1 && event.data.size) {
                            webSocket.send(event.data);
                        }
                    });
                    mediaRecorder.start(1000);
                });

                webSocket.addEventListener('message', (message) => {
                    console.log('[socket]: message received');
                    const received = message && JSON.parse(message?.data);
                    const result = received.channel?.alternatives[0].transcript;
                    setTranscript(prevState => result === '' ? prevState : result);
                });

                webSocket.addEventListener('error', (err) => {
                    console.log('[socket]: ', err);
                    setPlaceholder('sorry there has been an error');
                    setTimeout(() => {
                        setPlaceholder('type it here');
                    }, 5000);
                });

                webSocket.addEventListener('close', () => {
                    setPlaceholder('try reloading the page');
                    console.log('[socket]: close');
                });

            })
            .catch((err) => {
                // handle error
                // permission ignored accessed
            });
    }, [lang]);

    useEffect(() => {
        if (transcript !== '') {
            //callLink(transcript);
            debounce(callList(transcript));
        }
    }, [transcript]);

    const fillDetails = () => {
        let data_arr = [];
        if (queryResults.length === 1) {
            for (const key in queryResults[0]) {
                data_arr.push(
                <div className="flex">
                    <p>{key}</p>
                    <p>{queryResults[0][key]}</p>
                </div>)
            }
        } else {
            queryResults.map((stock, index) => {
                data_arr.push(
                    <div key={index}>
                        <a href={stock.link}>
                            {stock.stockName}
                        </a>
                    </div>
                )
            })
        }
        return data_arr;

    }
    //const callLink = useCallback(
    //    (passedTranscript) => {
    //        debounce(callList(passedTranscript));
    //    }
    //, []);

    const callList = (name) => {
        if (name === '' || name.length < 3) return;
        axios.post("/api/getStockLink", { name })
            .then(data => {
                if (data.status === 200) {
                    setQueryResults(data.data.data);
                } else {
                    setQueryResults([]);
                }
                // properly check the err
            })
            .catch(err => {
                setQueryResults([]);
                console.log(err);
            });
    }

    return (
        <>
          <div id="search-form" className="flex items-center gap-3 rounded-lg bg-white bg-opacity-5 p-3 dark:bg-opacity-20 sm:px-7 sm:py-2.5">
            <input id="search-bar" 
              className="w-full bg-transparent text-lg border-none outline-none"
              value={transcript}
              placeholder={placeholder} 
              onChange={(e) => setTranscript(e.target.value)}
            /> 
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            
          </div>

            <div id="stock-details">
                {console.log(queryResults)}
                {
                    queryResults.length === 0
                        ? ''
                        : fillDetails()
                }
            </div>
        </>
    )
}