import warnings
import yfinance as yf
import xgboost as xgb

warnings.filterwarnings("ignore",category=DeprecationWarning)
warnings.filterwarnings("ignore", category=FutureWarning)

stock = yf.Ticker("INFY.BO").history(period="max")

train = stock.iloc[:int(0.99*len(stock)),:]
test = stock.iloc[int(0.99*len(stock)):,:]
features = ['Open','Volume']
target = ['Close']

model = xgb.XGBRegressor()

model.fit(train[features],train[target])

predictions = model.predict(test[features])

print(predictions[len(predictions)-1])

