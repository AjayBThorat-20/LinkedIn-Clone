import Head from "next/head";
import Header from "../components/Header";
import { connectToDatabase } from "../util/mongodb";
import Myusers from "../components/users/Myusers";
import Dummy1 from "../components/users/Dummy1";
import Dummy2 from "../components/users/dummy2";

function networks({ users }) {
    // console.log(users);
    // const { data: session } = useSession();
    // console.log(session);



    return (
        <div className="space-y-10 relative">


            <Head>
                <title>Linkedin-Networks</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <Header />


            <div className="item-center pl-5 pr-5">
                <div className="bg-white dark:bg-[#1D2226] py-2 rounded-lg space-y-2 overflow-hidden border border-gray-300 dark:border-none ">

                    {/* { */}

                    <div className="m-8">
                  <Myusers className="ml-10 mr-10 " users={users} />

                </div>
                <div className="m-8">
                  <Dummy1 className="ml-10 mr-10 " />
                </div>

                <div className="m-8">
                  <Dummy2 className="ml-10 mr-10 " />
                </div>
                </div>
            </div>
        </div>
    );
}

export default networks

export async function getServerSideProps(context) {

    const { db } = await connectToDatabase();

    // const db = client.db("MONGODB_DB");

    const users = await db.collection("users").find({}).toArray();


    return {
        props: {
            users: users.map((users) => ({
                _id: users._id.toString(),
                name: users.name,
                email: users.email,
                image: users.image,
                // userImg: post.userImg,
                // createdAt: post.createdAt,
            })),
        },
    };
}