import {
  METADATA_RETRIEVER_LATEST_RELEASE,
  METADATA_RETRIEVER_LATEST_TAGGED_RELEASE,
  MUSIC_LATEST_RELEASE,
  MUSIC_LATEST_TAGGED_RELEASE,
} from "./env";

export type Distributor = "github" | "google-playstore" | "npm";

export type Release = {
  versionCode: string;
  distributors: Distributor[];
};

export interface Work {
  /**
   * Indicates that this will have a dedicated screen. This should also be
   * the name of the folder in `~/assets/projects` where assets are stored.
   */
  slug?: string;
  name: string;
  description: string;
  tags: string[];
  distributions: {
    /** Link to GitHub repository. Do not end with trailing `/`. */
    github: `https://github.com/${string}`;
    "google-playstore"?: string;
    npm?: string;
  };
  releases: {
    stable?: Release;
    preRelease?: Release;
  };
  privacyPolicy?: string;
  archived?: boolean;
}

export const Works = [
  {
    slug: "music",
    name: "Music",
    description: "A Nothing inspired local music player.",
    tags: ["utility", "android"],
    distributions: {
      github: "https://github.com/MissingCore/Music",
      "google-playstore":
        "https://play.google.com/store/apps/details?id=com.cyanchill.missingcore.music",
    },
    releases: {
      stable: {
        versionCode: MUSIC_LATEST_RELEASE,
        distributors: ["github", "google-playstore"],
      },
      preRelease:
        MUSIC_LATEST_RELEASE !== MUSIC_LATEST_TAGGED_RELEASE
          ? {
              versionCode: MUSIC_LATEST_TAGGED_RELEASE,
              distributors: ["github", "google-playstore"],
            }
          : undefined,
    },
    privacyPolicy: "/music/privacy-policy",
  },
] as const satisfies Work[];

export const OpenSource = [
  {
    name: "react-native-metadata-retriever",
    description:
      "React Native wrapper for Android's unstable `MetadataRetriever` API.",
    tags: ["package"],
    distributions: {
      github: "https://github.com/MissingCore/react-native-metadata-retriever",
      npm: "https://www.npmjs.com/package/@missingcore/react-native-metadata-retriever",
    },
    releases: {
      stable: {
        versionCode: METADATA_RETRIEVER_LATEST_RELEASE,
        distributors: ["github", "npm"],
      },
      preRelease:
        METADATA_RETRIEVER_LATEST_RELEASE !==
        METADATA_RETRIEVER_LATEST_TAGGED_RELEASE
          ? {
              versionCode: METADATA_RETRIEVER_LATEST_TAGGED_RELEASE,
              distributors: ["github", "npm"],
            }
          : undefined,
    },
  },
  {
    name: "music-glyph-toys",
    description:
      "🧪 An experimental package adding Glyph Matrix support to the MissingCore Music app via a React Native Turbo Native Module.",
    tags: ["archived", "package"],
    distributions: {
      github: "https://github.com/MissingCore/music-glyph-toys",
    },
    releases: {
      preRelease: {
        versionCode: "v0.4.1",
        distributors: ["github"],
      },
    },
    archived: true,
  },
  {
    name: "audio-metadata",
    description:
      "An audio file metadata reader built primarily for React Native.",
    tags: ["package"],
    distributions: {
      github: "https://github.com/MissingCore/audio-metadata",
      npm: "https://www.npmjs.com/package/@missingcore/audio-metadata",
    },
    releases: {
      stable: {
        versionCode: "v1.3.0",
        distributors: ["github", "npm"],
      },
    },
    archived: true,
  },
] as const satisfies Work[];
