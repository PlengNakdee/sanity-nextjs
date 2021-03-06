PORT=3000

getClientId () {
az keyvault secret show --vault-name "auth0" --name "AUTH0-CLIENT-ID" --query "value"
}

getClientSecret() {
    az keyvault secret show --vault-name "auth0" --name "AUTH0-CLIENT-SECRET" --query "value"
}

cat <<EOF > .env.local
AUTH0_BASE_URL=$(gp url $PORT)
AUTH0_ISSUER_BASE_URL=https://dev-pqtgmoe1.us.auth0.com
AUTH0_CLIENT_ID=$(getClientId)
AUTH0_CLIENT_SECRET=$(getClientSecret)
EOF