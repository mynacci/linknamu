import { MongoClient, type Collection } from "mongodb";

type ClickDoc = { _id: string; count: number };

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB ?? "linknamu";

// 개발 모드의 HMR이나 서버리스 재사용 시 연결이 계속 늘어나지 않도록 전역에 캐시한다.
const globalForMongo = globalThis as unknown as {
  _mongoClientPromise?: Promise<MongoClient>;
};

function getClient(): Promise<MongoClient> | null {
  if (!uri) return null;
  globalForMongo._mongoClientPromise ??= new MongoClient(uri).connect();
  return globalForMongo._mongoClientPromise;
}

export async function getClicksCollection(): Promise<Collection<ClickDoc> | null> {
  const client = getClient();
  if (!client) return null;
  return (await client).db(dbName).collection<ClickDoc>("clicks");
}
