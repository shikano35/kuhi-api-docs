# 句碑API ドキュメント

句碑データベースAPIのドキュメントです。

## 概要

句碑データベースAPIは、日本全国の句碑に関する包括的な情報を提供するRESTful APIです。句碑本体の情報から、刻まれた俳句、俳人、設置場所、出典資料まで、構造化されたデータとして提供します。

## 主要エンドポイント

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

- [API ドキュメント](https://api.kuhi.jp/docs)
- [MCP サーバー](https://github.com/shikano35/kuhi-api-mcp-server)
