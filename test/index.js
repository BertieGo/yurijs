
const { visit, namedTypes: n, builders: b } = require('ast-types');
const babelParser = require('@babel/parser');
const { print, parse } = require('recast');

// var fooId = b.identifier("foo");


// const a = b.callExpression(b.identifier('action'), [
//   b.functionExpression(
//     null,
//     [b.identifier('$event')],
//     b.blockStatement([
//       b.expressionStatement(
//         b.callExpression(
//           b.memberExpression(b.identifier('$proxy'), b.identifier('count')),
//           [b.identifier('arguments')]
//         )
//       ),
//     ])
//   ),
// ]);

// const code = 'action((function() { const _event = false; return function() { count++ })())'


// const a = b.arrayExpression([
//   b.objectExpression([b.objectProperty(b.literal('test'), b.stringLiteral('233'))])
// ])
//
// console.log(print(a))

  b.callExpression(
    b.identifier(''),
    [
      b.functionExpression(
        null,
        [b.identifier('$event')],
        b.blockStatement([
          b.expressionStatement(
            b.callExpression(
              b.memberExpression(b.identifier('$proxy'), b.identifier('count')),
              [b.identifier('arguments')]
            )
          ),
        ])
      ),
    ]
  )
]);


const complier = (string) => {
    const names = string.replace('\n', '').split(/\s+/);
    const ret = {};
  names.forEach((n) => {
        ret[n.substr(2).toLowerCase()] = n;
    })
return ret;
}


