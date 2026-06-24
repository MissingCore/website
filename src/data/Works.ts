import { MUSIC_LATEST_RELEASE, MUSIC_LATEST_TAGGED_RELEASE } from "./env";

export type Distributor = "github" | "google-playstore";

export type Release = {
  versionCode: string;
  distributors: Distributor[];
};

export interface Work {
  /** Name of folder in `~/assets/projects` where assets are stored. */
  key: string;
  name: string;
  description: string;
  tags: string[];
  distributions: {
    github: `https://github.com/${string}`;
    "google-playstore"?: string;
  };
  releases: {
    stable: Release;
    preRelease?: Release;
  };
  privacyPolicy?: string;
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
  },
];
