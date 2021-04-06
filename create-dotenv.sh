PORT=3000

cat <<EOF > .env.local
AUTH0_BASE_URL=$(gp url $PORT)
AUTH0_ISSUER_BASE_URL=https://dev-pqtgmoe1.us.auth0.com
AUTH0_CLIENT_ID=
AUTH0_CLIENT_SECRET=
EOF