// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    {
      name: 'blog',
      type: 'document',
      title: 'Blog',
      fields: [
        {
          title: "Title",
          name: "title",
          type: "string",
          validation: Rule => Rule.required()
        },
        {
          title: "Subtitle",
          name: "subtitle",
          type: "string",
          validation: Rule => Rule.required()
        },
        {
          title: "Category",
          name: "category",
          type: "string",
          validation: Rule => Rule.required()
        },
        {
          title: 'Slug',
          name: 'slug',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          title: 'Image',
          name: 'image',
          type: 'image',
          validation: Rule => Rule.required()
        },
        {
          title: 'Release date',
          name: 'releaseDate',
          type: 'date',
          validation: Rule => Rule.required()
        },
        {
          title: 'Text',
          name: 'text',
          type: 'text',
          validation: Rule => Rule.required()
        },
        // {
        //   title: 'Text',
        //   name: 'text',
        //   type: 'array',
        //   of: [{ type: 'block' }],
        //   validation: Rule => Rule.required()
        // }
      ],
    }
  ]),
})
