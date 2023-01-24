FROM node:16.19-alpine3.17
RUN addgroup app && adduser -S -G app app
USER app
WORKDIR /app
# had to add --chown=app:app to get permissions to work for
# npm/package-lock.json to build properly
COPY --chown=app:app package*.json .
RUN npm install
COPY . .
EXPOSE 3000

CMD ["npm", "start"]