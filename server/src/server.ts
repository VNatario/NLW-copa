import Fastify from "fastify";

async function bootstrap() {
  const fastify = Fastify({
    logger: true,
    //habilita logs
  });

  //Rota de contagem (GET)
  //http:localhost:3333/pools/count
  fastify.get("/pools/count", () => {
    return {
      count: 1123412343,
    };
  });

  await fastify.listen({ port: 3333 });
}
bootstrap();
