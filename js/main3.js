// @ts-check
/* eslint-disable */

const http = require('http');
const { routes } = require('./route');

// /**
//  * @typedef Post
//  * @property {number} id
//  * @property {string} title
//  * @property {string} content
//  */

// /** @type {Post[]} */
// const posts = [
//   {
//     id: 1,
//     title: '첫번째 블로그 글',
//     content: '첫번째 내용',
//   },
//   {
//     id: 2,
//     title: '두번째 블로그 글',
//     content: '두번째 내용',
//   },
//   {
//     id: 3,
//     title: '세번째 블로그 글',
//     content: '세번째 내용',
//   },
// ];

const server = http.createServer((req, res) => {
  console.log('REQ URL', req.url);
  // console.log('@@@@', req.url);

  const urlArr = req.url ? req.url.split('/') : [];
  let id;
  if (urlArr.length > 2) {
    id = parseInt(urlArr[2], 10);
  } else {
    id = undefined;
  }

  async function main() {
    const route = routes.find(
      (_route) =>
        req.url &&
        req.method &&
        req.url.search(_route.url) !== -1 &&
        _route.method === req.method &&
        typeof id === _route.id
    );
    console.log(typeof id);

    res.setHeader('Content-Type', 'application/json; utf-8');

    if (!route) {
      console.log('해당 API를 찾을 수 없습니다');

      res.statusCode = 404;
      res.end('Not Found');
    } else {
      let newPost;

      if (req.method === 'POST' || req.method === 'PUT') {
        newPost = await new Promise((resolve, reject) => {
          req.setEncoding('utf-8');

          req.on('data', (data) => {
            console.log('@');
            console.log('#', data);
            if (data !== undefined) {
              resolve(JSON.parse(data));
            } else {
              reject();
            }
          });
        });
      }

      const result = await route.callback(id, newPost);

      console.log('*', result);

      res.statusCode = result.statusCode;
      res.end(JSON.stringify(result.body));

      // promise.then((data) => {
      //   newPost = JSON.parse(data);

      //   const result = await route.callback(id, newPost);

      //   console.log(result);

      //   res.statusCode = result.statusCode;
      //   res.end(JSON.stringify(result.body));

      // }).catch(() => {
      //   res.statusCode = 404;
      //   res.end("there's no data");
      // })
    }
  }

  main();

  /**
   * GET    /posts       목록 가져오기
   * GET    /posts/:id   특정 글 내용 가져오기
   * POST   /posts       새로운 글 올리기
   * PUT    /posts/:id   특정 글 내용 수정하기
   * DELETE /posts/:id   특정 글 삭제하기
   *
   */
  // if (req.url === '/posts' && req.method === 'GET') {
  //   const result = {
  //     posts: posts.map((post) => ({
  //       id: post.id,
  //       title: post.title,
  //     })),
  //     totalCount: posts.length,
  //   };

  //   res.setHeader('Content-Type', 'application/json; charset=utf-8'); // <- 이코드는 외우기
  //   res.statusCode = 200;
  //   res.end(JSON.stringify(result));

  //   res.statusCode = 200;
  //   console.log('블로그의 글 목록을 가져오는 API 입니다');
  // } else if (id !== -1 && req.method === 'GET') {
  //   const result = posts.find((post) => post.id === id);

  //   res.setHeader('Content-Type', 'application/json; charset=utf-8');

  //   if (result) {
  //     console.log('블로그의 특정 id를 가지는 글의 내용을 보여주는 api 입니다');

  //     res.statusCode = 200;
  //     res.end(JSON.stringify(result));
  //   } else {
  //     console.log('해당 id를 가지는 포스트를 찾을 수 없었습니다');

  //     res.statusCode = 404;
  //     res.end('해당 id를 가지는 포스트를 찾을 수 없었습니다');
  //   }
  // } else if (req.method === 'POST') {
  //   req.setEncoding('utf-8');
  //   req.on('data', (data) => {
  //     const newPost = JSON.parse(data);
  //     posts.push({
  //       id: posts[posts.length - 1].id + 1,
  //       title: newPost.title,
  //       content: newPost.content,
  //     });
  //   });

  //   res.setHeader('Content-Type', 'application/json; charset=utf-8');
  //   res.statusCode = 200;
  //   res.end('새로운 글이 등록 되었습니다');

  //   console.log(posts);

  //   console.log('블로그의 새로운 글을 등록하는 api 입니다');
  // } else if (req.method === 'PUT') {
  //   req.setEncoding('utf-8');
  //   req.on('data', (data) => {
  //     const modifyPost = JSON.parse(data);
  //     modifyPost.id = id;
  //     posts[id - 1] = modifyPost;
  //   });

  //   res.setHeader('Content-Type', 'application/json; charset=utf-8');
  //   res.statusCode = 200;
  //   res.end(`수정된 포스트의 id 번호는 ${id} 입니다`);

  //   console.log('블로그의 특정 글을 수정하는 api 입니다');
  // } else if (req.method === 'DELETE') {
  //   posts.splice(id - 1, 1);

  //   res.setHeader('Content-Type', 'application/json; charset=utf-8');
  //   res.statusCode = 200;
  //   res.end(`id 번호가 ${id}인 포스트를 삭제하였습니다`);

  //   console.log('블로그의 특정 글을 삭제하는 api 입니다');
  // } else {
  //   res.setHeader('Content-Type', 'application/json; charset=utf-8');
  //   res.statusCode = 404;
  //   res.end(`해당 api는 존재하지 않습니다`);

  //   console.log('해당 api는 존재하지 않습니다');
  // }

  // else if (req.url && urlArr[1] === 'posts' && req.method === 'GET') {
  // res.statusCode = 200;
  // console.log('블로그의 특정 글 내용을 보여주는 API 입니다');
  // console.log(`Post ID 값은 ${id} 입니다`);
  // } else if (req.url === '/posts' && req.method === 'POST') {
  //   res.statusCode = 200;
  //   console.log('블로그에 새로운 글을 올리는 API 입니다');
  // } else if (urlArr[1] === 'posts' && req.method === 'PUT') {
  //   res.statusCode = 200;
  //   console.log('블로그의 특정 글을 수정하는 API 입니다');
  // } else if (urlArr[1] === 'posts' && req.method === 'DELETE') {
  //   res.statusCode = 200;
  //   console.log('블로그의 특정 글을 삭제하는 API 입니다');
  // } else {
  //   res.statusCode = 400;
  //   res.end('Not Found');
  //   console.log('해당 API를 찾을 수 없습니다');
  // }
});

const PORT = 4000;

server.listen(PORT, () => {
  console.log(`해당 서버는 ${PORT}번 포트에서 작동 중입니다.`);
});
