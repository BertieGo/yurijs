
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

const a = b.callExpression(b.identifier('action'), [

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


const c = b.expressionStatement(
  b.callExpression(
    b.identifier(''),
    []
  ),
  b.callExpression(
    b.identifier(''),
    []
  )
)


const d = b.callStatement (
  b.expressionStatement(
    b.callExpression(
      b.identifier(''),
      []
    ),
  ),
)

console.log(print(d))

// b.memberExpression(
//   b.callExpression(
//
//   ), b.identifier('count')),
//   b.identifier(''),
//   [
//     b.functionExpression(
//       null,
//       [],
//       b.blockStatement([])
//     )
//   ],
//   [],
