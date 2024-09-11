import { rest } from 'msw';

export const hadlers = [
  rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { nameL: 'Hensi' },
        { name: "Rutvi" },
        { name: "Henu" },
        { name: "Rutu" },
        { name: "Shruti" }
      ])
    )

  })
]