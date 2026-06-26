import type { Work } from "./Works";

/** Format releases into content that can be passed directly into `<ReleaseLink />`. */
export function formatReleases(
  releases: Work["releases"],
  distributions: Work["distributions"],
) {
  return Object.entries(releases)
    .map(([key, release]) => {
      if (!release) return;
      const { versionCode, distributors } = release;
      return {
        versionCode: versionCode,
        stable: key === "stable",
        links: distributors.map((distributor) => ({
          distributor,
          link:
            distributor === "github"
              ? `${distributions.github}/releases/${versionCode}`
              : distributions[distributor]!,
        })),
      };
    })
    .filter((release) => release !== undefined);
}
