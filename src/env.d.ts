interface ImportMetaEnv {
  readonly PUBLIC_MUSIC_LATEST_TAG: string;
  readonly PUBLIC_MUSIC_RECENT_TAG: string;

  readonly PUBLIC_METADATA_RETRIEVER_LATEST_TAG: string;
  readonly PUBLIC_METADATA_RETRIEVER_RECENT_TAG: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
