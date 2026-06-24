import { MUSIC_LATEST_RELEASE, MUSIC_LATEST_TAGGED_RELEASE } from "./env";

export type Distributor = "github" | "google-playstore" | "npm";

export type Release = {
  versionCode: string;
  distributors: Distributor[];
};

export interface Work {
  /** Name of folder in `~/assets/projects` where assets are stored. */
  key?: string;
  name: string;
  description: string;
  tags: string[];
  distributions: {
    github: `https://github.com/${string}`;
    "google-playstore"?: string;
    npm?: string;
  };
  releases: {
    stable: Release;
    preRelease?: Release;
  };
  privacyPolicy?: string;
  archived?: boolean;
}

export const Works: Work[] = [
  {
    key: "Music",
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
];

export const OpenSource: Work[] = [
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
        versionCode: "v3.2.1",
        distributors: ["github", "npm"],
      },
    },
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
];
