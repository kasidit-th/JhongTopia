import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Discover & Share
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> Opinions & Perspectives</span>
    </h1>
    <p className='desc text-center'>
    JhongTopia is a space for everyone to discover and share their thoughts, opinions, and perspectives in the modern world.
    </p>

    <Feed />
  </section>
);

export default Home;