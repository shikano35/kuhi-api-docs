# 句碑APIドキュメント

句碑APIのドキュメントサイトです。

## 概要

句碑APIは、日本全国の句碑を提供するAPIです。句碑本体の情報、刻まれた俳句、俳人、設置場所、出典資料を提供します。

## REST API エンドポイント

### 句碑 (Monuments)

- `/monuments` - 句碑の一覧取得
- `/monuments/{id}` - 特定の句碑の詳細情報
- `/monuments/{id}/inscriptions` - 句碑の碑文一覧
- `/monuments/{id}/events` - 句碑のイベント履歴
- `/monuments/{id}/media` - 句碑のメディア情報

### 碑文 (Inscriptions)

- `/inscriptions` - 碑文の一覧取得
- `/inscriptions/{id}` - 特定の碑文の詳細情報

### 俳句 (Poems)

- `/poems` - 俳句の一覧取得
- `/poems/{id}` - 特定の俳句の詳細情報

### 俳人 (Poets)

- `/poets` - 俳人の一覧取得
- `/poets/{id}` - 特定の俳人の詳細情報
- `/poets/{id}/monuments` - 俳人に関連する句碑の一覧

### 場所 (Locations)

- `/locations` - 設置場所の一覧取得
- `/locations/{id}` - 特定の場所の詳細情報
- `/locations/{id}/monuments` - 場所に関連する句碑の一覧

### 出典 (Sources)

- `/sources` - 出典の一覧取得
- `/sources/{id}` - 特定の出典の詳細情報
- `/sources/{id}/monuments` - 出典に関連する句碑の一覧

## Linked Open Data エンドポイント

RDF形式で句碑データを提供しています。Turtle, JSON-LD, RDF/XML等の形式でデータを取得できます。

### エンドポイント

- `/monuments` - 句碑一覧を取得
- `/monuments/{id}` - 特定の句碑を取得
- `/poems` - 俳句一覧を取得
- `/poems/{id}` - 特定の俳句を取得
- `/poets` - 俳人一覧を取得
- `/poets/{id}` - 特定の俳人を取得
- `/locations` - 場所一覧を取得
- `/locations/{id}` - 特定の場所を取得
- `/void` - VoID ディスクリプタ

### 使用語彙

- **Schema.org** - 汎用的なメタデータの表現
- **Dublin Core** - 文書のメタデータ
- **FOAF** - 人物・組織情報
- **WGS84 Geo** - 地理座標
- **Haiku Monument** - 句碑固有の情報

## 開発

```bash
# 依存関係のインストール
pnpm install

# 開発サーバーの起動
pnpm dev

# ビルド
pnpm build

# プレビュー
pnpm preview

# フォーマット
pnpm format

# リント
pnpm lint
```

## 参考リンク

- [REST API ドキュメント](https://api.kuhi.jp/docs)
- [Linked Open Data](https://data.kuhi.jp)
- [MCP サーバー](https://github.com/shikano35/kuhi-api-mcp-server)
