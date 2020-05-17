// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import section from "./section";
import blockContent from "./blockContent";
import embedPlayer from "./embedPlayer";
import resume from "./resume";
import socials from "./socials"
import home from "./home";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    home,
    section,
    resume,
    socials,
    blockContent,
    embedPlayer,
  ]),
});
