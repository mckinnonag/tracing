FROM node:22-bookworm-slim AS builder
WORKDIR "/var/task"
ADD . .
RUN npm install
RUN npm run build 
RUN npm prune --omit=dev

FROM node:22-bookworm-slim

WORKDIR "/var/task"
COPY --from=builder  /var/task/server.js /var/task/server.js
COPY --from=builder  /var/task/node_modules /var/task/node_modules
COPY --from=builder  /var/task/package.json /var/task/package.json
COPY --from=builder  /var/task/build /var/task/build

ENV NODE_ENV=production PORT=3000
CMD ["node", "server.js"]