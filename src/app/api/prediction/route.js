import { exec } from 'child_process';

export default function GET(req, res) {
  const child = exec('python ai.py', (error, stdout, stderr) => {
    if (error) {
      console.error("Error:", error);
      res.status(500).json({ error: 'Command execution failed' });
    } else {
      console.log("stdout:", stdout);
      console.log("stderr:", stderr);
      res.status(200).json({ prediction: stdout });
    }
  });

}
