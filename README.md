### Installation:

#### API
mkvirtualenv flash
workon flash
pip install -r api/requirements.txt

#### Optional: upgrade Node and NPM
nvm install 5.9.1
npm install -g npm

#### Web
cd web
npm install
npm start

### Startup
honcho start (or foreman start)
localhost:8000/cards/ for API
localhost:8080 for frontend