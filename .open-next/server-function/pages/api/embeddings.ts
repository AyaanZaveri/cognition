import { NextApiRequest, NextApiResponse } from "next";
import { createEmbeddings } from "@/utils/embed";
import { createChain } from "@/utils/chain";
import { ConversationalRetrievalQAChain } from "langchain/chains";

const embedding = async (req: NextApiRequest, res: NextApiResponse) => {
  const { docs } = req.body;

  const vectorStore = await createEmbeddings(docs);

  res.status(200).json(vectorStore);
};

export default embedding;
