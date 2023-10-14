import subprocess
import platform

venv_name = "myenv"
log_file = open("output.log", "w")

subprocess.run(["python","-m","venv",venv_name], stdout=log_file, stderr=subprocess.STDOUT, check=True)

os = platform.system()

if os == "Windows":
    if subprocess.run([venv_name + "\\Scripts\\activate"], stdout=log_file, stderr=subprocess.STDOUT, shell=True).returncode != 0:
        raise Exception("Failed to activate virtual environment on Windows")
    subprocess.run([venv_name + "\\Scripts\\pip", "install", "xgboost"], stdout=log_file, stderr=subprocess.STDOUT,check=True)
    subprocess.run([venv_name + "\\Scripts\\pip", "install", "scikit-learn"], stdout=log_file, stderr=subprocess.STDOUT, check=True)
    subprocess.run([venv_name + "\\Scripts\\pip", "install", "yfinance"], stdout=log_file, stderr=subprocess.STDOUT, check=True)
else:
    subprocess.run(["source", venv_name + "/bin/activate"], stdout=log_file, stderr=subprocess.STDOUT, shell=True)
    subprocess.run([venv_name + "/bin/pip", "install", "xgboost"], stdout=log_file, stderr=subprocess.STDOUT, check=True)
    subprocess.run([venv_name + "/bin/pip", "install", "scikit-learn"], stdout=log_file, stderr=subprocess.STDOUT, check=True)
    subprocess.run([venv_name + "/bin/pip", "install", "yfinance"], stdout=log_file, stderr=subprocess.STDOUT, check=True)
import warnings

warnings.filterwarnings("ignore",category=DeprecationWarning)
warnings.filterwarnings("ignore", category=FutureWarning)


import yfinance as yf
import xgboost as xgb

stock = yf.Ticker("INFY.BO").history(period="max")

train = stock.iloc[:int(0.99*len(stock)),:]
test = stock.iloc[int(0.99*len(stock)):,:]
features = ['Open','Volume']
target = ['Close']

model = xgb.XGBRegressor()

model.fit(train[features],train[target])

predictions = model.predict(test[features])

print(predictions[len(predictions)-1])
