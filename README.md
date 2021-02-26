# Bosch Project

https://bosch-frontend.azurewebsites.net/

## Local Setup

### Backend

Available on `localhost:8000`.

```
poetry install # download dependencies
poetry shell # activate virtual environment
uvicorn api:app --reload # run server (dev)
python api.py # run server (prod)
```

### Frontend

Available on `localhost:3000`.

```
npm install
npm run start
```