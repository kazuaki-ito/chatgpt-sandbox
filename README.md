## 要件

* docker-compose

## 環境の起動

```bash
docker-compose up -d
docker-compose exec node npm install
cp .env.example .env
```

.envにopenaiのAPI KEYを設定

## 実行

```bash
docker-compose exec node npm run exec
```

