import { graphql } from 'msw';

// import { GetTagsQuery, GetTagsQueryVariables } from 'api';
// export const handlers = [
//   graphql.query<GetTagsQuery, GetTagsQueryVariables>(
//     'GetTags',
//     (_req, res, ctx) => {
//       return res(
//         ctx.data({
//           __typename: 'Query',
//           allTags: {
//             __typename: 'TagPage',
//             data: [{ _id: 'aoeu', name: 'test tag', __typename: 'Tag' }, null],
//           },
//         })
//       );
//     }
//   ),
// ];

export const handlers = [];
