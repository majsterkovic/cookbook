module.exports = function (eleventyConfig) {
  // Passthrough copy for assets
  eleventyConfig.addPassthroughCopy("assets");

  // Watch for changes in assets
  eleventyConfig.addWatchTarget("assets/");

  // Create recipe collection
  eleventyConfig.addCollection("recipes", function (collectionApi) {
    return collectionApi.getFilteredByGlob("content/recipes/*.md");
  });

  // Add a filter to format time (minutes to hours + minutes)
  eleventyConfig.addFilter("formatTime", function (minutes) {
    if (minutes < 60) return `${minutes} min`;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (mins === 0) return `${hours}h`;
    return `${hours}h ${mins}min`;
  });

  // Add difficulty label filter
  eleventyConfig.addFilter("difficultyLabel", function (difficulty) {
    return difficulty; // Already in Polish
  });

  // Add date filter
  eleventyConfig.addFilter("dateFormat", function (date) {
    return new Date(date).toLocaleDateString('pl-PL');
  });

  return {
    dir: {
      input: "content",
      includes: "../_includes",
      data: "../_data",
      output: "_site"
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
