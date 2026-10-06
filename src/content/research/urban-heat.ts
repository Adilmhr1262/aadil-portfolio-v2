/**
 * Urban Heat & Green Cover Observatory — research page content.
 *
 * Every number below is taken from the project's analytical report
 * (~/workspace/karachi-heat-observatory/reports/report.md), itself produced
 * by the reproducible pipeline under Master Research Protocol v1.0.
 * Association only; no causal or health claims — as the report states.
 */

export const urbanHeat = {
  classification: "Research · Analytical report",
  year: "2015–2025",
  name: "Urban Heat Observatory",
  fullName: "Karachi Urban Heat & Green Cover Observatory",
  statement:
    "How do vegetation and land surface temperature co-vary across Karachi? Eleven years of Landsat observations, a 1 km analysis grid, and a pre-registered protocol: greener cells run cooler, and the hottest low-vegetation cells keep reappearing in the same places.",
  metadata: [
    { label: "Study area", value: "Karachi Division, Sindh, Pakistan" },
    { label: "Period", value: "Pre-monsoon hot season (May–June), 2015–2025" },
    {
      label: "Data",
      value: "176 USGS Landsat Collection 2 Level-2 scenes, 102 dates",
    },
    { label: "Grid", value: "1 km cells, 30 m Landsat composites" },
    { label: "Protocol", value: "Master Research Protocol v1.0" },
  ],

  questions: {
    title: "Four research questions.",
    items: [
      {
        no: "RQ1",
        body: "How do NDVI and daytime land surface temperature vary spatially across Karachi during selected hot-season windows?",
      },
      {
        no: "RQ2",
        body: "What is the strength and form of the association between NDVI and LST at the analysis-unit level?",
      },
      {
        no: "RQ3",
        body: "Which areas repeatedly fall into high-LST and low-vegetation categories under a documented, consistent classification?",
      },
      {
        no: "RQ4",
        body: "Do simple statistical and machine-learning models explain or predict LST beyond a vegetation-only baseline, under spatially aware validation?",
      },
    ],
  },

  methods: {
    title: "Methods, briefly.",
    lede:
      "Full detail lives in the analytical report. The essentials: same USGS products read via the Planetary Computer STAC API, strict quality masking, per-pixel median annual composites, and pre-registered hypotheses with go/no-go criteria.",
    rows: [
      {
        label: "Scenes",
        value:
          "Landsat 8 (2015–2025) and Landsat 9 (from 2022); May–June, cloud cover under 20%, daytime Tier-1 products",
      },
      {
        label: "Indices",
        value:
          "NDVI, NDBI, and land surface temperature in Celsius from the thermal band, per 30 m pixel",
      },
      {
        label: "Quality screens",
        value:
          "Clear-pixel mask, 1 km cloud-distance buffer, and a 2 K surface-temperature uncertainty screen",
      },
      {
        label: "Analysis unit",
        value:
          "1 km grid cells with at least 100 valid land pixels and 2 valid observations; otherwise absent, never zero-filled",
      },
      {
        label: "Statistics",
        value:
          "Per-year correlations, pooled OLS with year fixed effects and HC3 standard errors, hotspot persistence by permutation test",
      },
    ],
  },

  results: {
    title: "What the data say.",
    headline: {
      value: "-11.28 °C",
      label:
        "Pooled NDVI slope: a 0.1 rise in NDVI is associated with about 1.1 °C lower land surface temperature (95% CI -12.54 to -10.03; R² 0.40; n = 12,563).",
    },
    points: [
      "The NDVI–LST association is negative in nine of ten analyzed years (2016 yielded no usable cells after quality screening).",
      "The relationship is not stable across years (F-test on NDVI-by-year interactions, p = 4.4e-57) — strength ranges from near zero to strongly negative.",
      "Adding built-up index (NDBI), distance to coast, and elevation raises R² from 0.40 to 0.54; built-up surfaces run hotter.",
      "2,761 grid cells are jointly hot and low-vegetation in at least 3 of 11 years, against 0.123 expected by chance (p < 0.0001) — the same places keep reappearing.",
      "The Random Forest was not run: the pre-registered go/no-go criteria were not met, so the linear results stand as reported.",
    ],
  },

  limitations: {
    title: "Limits, stated plainly.",
    items: [
      "This is late-morning land surface temperature from the Landsat thermal band — not air temperature, not a heat-exposure metric. No health interpretation is made.",
      "The study is observational: it does not claim vegetation alone causes temperature differences.",
      "Year 2016 is absent; 2017 contributes only 37 cells. Coverage varies by year with input data quality.",
      "The May–June window captures the pre-monsoon hot season only; results do not generalize to other seasons.",
    ],
  },

  provenance: {
    title: "Provenance.",
    body: "Analysis produced by a reproducible Python pipeline under Master Research Protocol v1.0: versioned configuration, documented data contract, test suite, and a full analytical report with diagnostics. Association only; no causal or health claims.",
  },
};

export const urbanHeatFigures = [
  {
    src: "/research/urban-heat/lst-map.webp",
    width: 720,
    height: 720,
    alt: "Map of land surface temperature in degrees Celsius across Karachi for May-June 2023, derived from Landsat.",
    caption: "Land surface temperature (°C), Karachi, May–June 2023.",
    meta: "Landsat C2 L2",
  },
  {
    src: "/research/urban-heat/ndvi-map.webp",
    width: 720,
    height: 720,
    alt: "Map of NDVI vegetation index across Karachi for May-June 2023, derived from Landsat.",
    caption: "Vegetation (NDVI), Karachi, May–June 2023.",
    meta: "Landsat C2 L2",
  },
  {
    src: "/research/urban-heat/scatter.webp",
    width: 720,
    height: 540,
    alt: "Scatter plot of NDVI against land surface temperature for 1,093 grid cells, May-June 2023.",
    caption: "NDVI vs land surface temperature, 1,093 cells, 2023.",
    meta: "n = 1,093",
  },
  {
    src: "/research/urban-heat/correlation.webp",
    width: 960,
    height: 480,
    alt: "Per-year Pearson correlation between NDVI and land surface temperature with 95 percent confidence intervals, 2015 to 2025.",
    caption: "NDVI–LST association by year, with 95% confidence intervals.",
    meta: "2015–2025",
  },
  {
    src: "/research/urban-heat/hotspots.webp",
    width: 840,
    height: 720,
    alt: "Map showing years each 1 km cell fell in the top land-surface-temperature decile and bottom NDVI decile, 2015 to 2025.",
    caption: "Hotspot persistence: years each cell was hot with low vegetation.",
    meta: "p < 0.0001",
  },
];
