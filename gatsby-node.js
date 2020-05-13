/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  if (getConfig().mode === `production`) {
    actions.setWebpackConfig({ devtool: false });
  }
};
