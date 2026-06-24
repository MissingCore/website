export type Distributor = "github" | "google-playstore";

export type Release = {
  versionCode: string;
  stable: boolean;
  distributions: Distributor[];
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
  releases: Release[];
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
    releases: [
      {
        versionCode: import.meta.env.PUBLIC_MUSIC_RELEASE,
        stable: true,
        distributions: ["github", "google-playstore"],
      },
      ...(import.meta.env.PUBLIC_MUSIC_RELEASE !==
      import.meta.env.PUBLIC_MUSIC_PRE_RELEASE
        ? [
            {
              versionCode: import.meta.env.PUBLIC_MUSIC_PRE_RELEASE,
              stable: false,
              distributions: [
                "github",
                "google-playstore",
              ] satisfies Distributor[],
            },
          ]
        : []),
    ],
  },
];
