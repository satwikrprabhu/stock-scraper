#!./venv/bin/python

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
