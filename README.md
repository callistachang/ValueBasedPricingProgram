# Bosch-ML

## Local Setup Instructions

```
# Install dependencies
pip install -r requirements.txt

# Migrate the latest database schema
python manage.py migrate

# Run the server locally
python manage.py runserver
```

Then, you may access the website at `127.0.0.1:8000`.

## Pogs

The website is currently deployed to http://boschml.azurewebsites.net/.

(How it was deployed: https://stories.mlh.io/deploying-a-basic-django-app-using-azure-app-services-71ec3b21db08)

On any push to the main branch, the website will build and redeploy itself.
