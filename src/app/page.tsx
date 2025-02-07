import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background p-4 pb-6">
      <div className="h-full w-full border border-foreground">
        <div className="max-w-[1920px] mx-auto">
          <header className="h-[115px]">
            <nav className="flex items-center justify-between w-full h-full px-12">
              <a href="/" className="block w-[139px]">
                <div className="w-[139px] h-[50px] bg-gray-300" />
              </a>

              <div className="flex items-center gap-6">
                <div className="flex items-center gap-8 font-roboto-mono text-[13px] uppercase tracking-[1px]">
                  <a href="/services" className="nav-link">
                    Services
                  </a>
                  <a href="/work" className="nav-link">
                    Work
                  </a>
                  <a href="/studio" className="nav-link">
                    Studio
                  </a>
                  <button className="nav-link flex items-center">
                    Pages
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                      <path d="m6 9 6 6 6-6"/>
                    </svg>
                  </button>
                  <button className="nav-link">
                    Cart (0)
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <button className="w-[6.88vw] h-[35.19px] bg-[#1C1C1C] text-white font-roboto-mono text-[13px] uppercase tracking-[1px] rounded-[6px] hover:opacity-90 transition-opacity">LET'S TALK</button>

                  <div className="h-9 w-px bg-foreground mx-2" />

                  <div className="flex items-center gap-2">
                    <a href="#" className="font-roboto-mono text-[13px] uppercase tracking-[1px] border border-[#1C1C1C] rounded-full w-[32px] h-[32px] flex items-center justify-center hover:bg-[#1C1C1C] hover:text-white transition-colors">
                      TW
                    </a>
                    <a href="#" className="font-roboto-mono text-[13px] uppercase tracking-[1px] border border-[#1C1C1C] rounded-full w-[32px] h-[32px] flex items-center justify-center hover:bg-[#1C1C1C] hover:text-white transition-colors">
                      IN
                    </a>
                    <a href="#" className="font-roboto-mono text-[13px] uppercase tracking-[1px] border border-[#1C1C1C] rounded-full w-[32px] h-[32px] flex items-center justify-center hover:bg-[#1C1C1C] hover:text-white transition-colors">
                      BE
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </header>

          <div className="px-12">
            <div className="divider" />
          </div>

          <main className="px-12 py-16">
            <section className="grid grid-cols-2 gap-20">
              <div>
                <h1 className="font-syne text-[96px] leading-[96px] mb-7">
                  We are a digital
                  <br />
                  agency from
                  <br />
                  Lisbon.
                </h1>
                <p className="font-satoshi text-[28px] leading-[42px]">
                  Elevating brands through creative digital
                  <br />
                  solutions, proudly representing Lisbon's
                  <br />
                  vibrant innovation.
                </p>
                <div className="w-[62px] h-[80px] bg-gray-300 mt-[138px]" />
              </div>
              <div className="rounded-2xl overflow-hidden">
                <div className="aspect-[847/638] relative">
                  <div className="absolute inset-0 bg-gray-300" />
                </div>
              </div>
            </section>

            <div className="divider mt-16" />

            <section className="mt-16">
              <div className="flex justify-between items-center">
                <h2 className="font-roboto-mono text-[15px] uppercase tracking-[1px]">
                  Our Clients
                </h2>
                <div className="w-px h-20 bg-foreground" />
                <div className="flex items-center gap-[100px]">
                  <div className="w-[80px] h-[80px] bg-gray-300" />
                  <div className="w-[93px] h-[80px] bg-gray-300" />
                  <div className="w-[92px] h-[80px] bg-gray-300" />
                  <div className="w-[99px] h-[80px] bg-gray-300" />
                  <div className="w-[148px] h-[42px] bg-gray-300" />
                  <div className="w-[86px] h-[80px] bg-gray-300" />
                </div>
              </div>
            </section>

            <div className="divider mt-16" />

            <section className="mt-16">
              <div className="flex justify-between items-start">
                <h2 className="font-roboto-mono text-[15px] uppercase tracking-[1px]">
                  What we do
                </h2>
                <div className="w-px h-[312px] bg-foreground" />
                <div className="flex-1 ml-16">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="flex gap-8">
                      <div className="w-[60px] h-[59px] bg-gray-300" />
                      <div>
                        <h3 className="font-syne text-[32px] uppercase">
                          Branding
                        </h3>
                        <p className="font-satoshi text-[18px] leading-[31px] mt-7">
                          We craft compelling brand identities that leave a<br />
                          lasting impression.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-8">
                      <div className="w-px h-[108px] bg-foreground" />
                      <div className="w-[60px] h-[61px] bg-gray-300" />
                      <div>
                        <h3 className="font-syne text-[32px] uppercase">
                          Design
                        </h3>
                        <p className="font-satoshi text-[18px] leading-[31px] mt-7">
                          Innovative and aesthetic designs that bring your ideas
                          <br />
                          to life.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="divider my-12" />

                  <div className="grid grid-cols-2 gap-8">
                    <div className="flex gap-8">
                      <div className="w-[60px] h-[61px] bg-gray-300" />
                      <div>
                        <h3 className="font-syne text-[32px] uppercase">Video</h3>
                        <p className="font-satoshi text-[18px] leading-[31px] mt-7">
                          Captivating visual storytelling that engages and
                          <br />
                          resonates with your audience.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-8">
                      <div className="w-px h-[107px] bg-foreground" />
                      <div className="w-[60px] h-[59px] bg-gray-300" />
                      <div>
                        <h3 className="font-syne text-[32px] uppercase">
                          Content
                        </h3>
                        <p className="font-satoshi text-[18px] leading-[31px] mt-7">
                          Engaging and persuasive content that captures
                          <br />
                          attention and sparks meaningful connections.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="divider mt-16" />

            <section className="mt-16">
              <div className="grid grid-cols-[1fr_3fr] gap-16">
                <div>
                  <h2 className="font-syne text-[64px] leading-[77px] uppercase">
                    Featured
                    <br />
                    work
                  </h2>
                  <p className="font-satoshi text-[22px] leading-[36px] mt-4">
                    Showcasing our standout projects
                    <br />
                    that blend creativity, strategy, and
                    <br />
                    cutting-edge design.
                  </p>
                  <button className="button-primary mt-[53px]">
                    See all Work
                  </button>
                </div>
                <div className="flex gap-16">
                  <div className="w-px h-[1553px] bg-foreground" />
                  <div className="flex-1">
                    <div className="w-full h-[471px] bg-gray-300" />
                    <div className="flex justify-between items-center mt-7">
                      <h3 className="font-syne text-[24px]">Dancing Stars</h3>
                      <span className="font-roboto-mono text-[15px] uppercase tracking-[1px]">
                        2022
                      </span>
                    </div>

                    <div className="divider mt-8" />

                    <div className="grid grid-cols-2 gap-12 mt-8">
                      <div>
                        <div className="w-full h-[235px] bg-gray-300" />
                        <div className="flex justify-between items-center mt-6">
                          <h3 className="font-syne text-[24px]">Enjoy Silence</h3>
                          <span className="font-roboto-mono text-[15px] uppercase tracking-[1px]">
                            2022
                          </span>
                        </div>

                        <div className="w-full h-[235px] bg-gray-300 mt-12" />
                        <div className="flex justify-between items-center mt-6">
                          <h3 className="font-syne text-[24px]">Boring Brand</h3>
                          <span className="font-roboto-mono text-[15px] uppercase tracking-[1px]">
                            2022
                          </span>
                        </div>
                      </div>

                      <div className="pl-12">
                        <div className="w-full h-[235px] bg-gray-300" />
                        <div className="flex justify-between items-center mt-6">
                          <h3 className="font-syne text-[24px]">Pure Vision</h3>
                          <span className="font-roboto-mono text-[15px] uppercase tracking-[1px]">
                            2022
                          </span>
                        </div>

                        <div className="w-full h-[235px] bg-gray-300 mt-12" />
                        <div className="flex justify-between items-center mt-6">
                          <h3 className="font-syne text-[24px]">New Culture</h3>
                          <span className="font-roboto-mono text-[15px] uppercase tracking-[1px]">
                            2022
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="divider mt-16" />

            <section className="mt-16">
              <h2 className="section-title">Our Values</h2>
              <div className="divider mt-16" />
              <div className="mt-16 flex gap-16">
                <div className="w-full h-[606px] bg-gray-300" />
                <div className="w-px h-[639px] bg-foreground" />
                <div className="flex-1">
                  <div className="flex items-center gap-8">
                    <div className="rounded-[20px] border border-foreground px-2.5 py-2.5 font-roboto-mono text-[15px] text-center tracking-[1px]">
                      01
                    </div>
                    <h3 className="font-syne text-[32px] uppercase">Vision</h3>
                  </div>
                  <p className="font-satoshi text-[18px] leading-[31px] mt-4 ml-[72px]">
                    Our relentless pursuit of a shared vision fuels our creativity
                    and propels us forward. With clarity
                    <br />
                    and foresight, we craft strategies that align with our
                    clients' goals and aspirations, transforming
                    <br />
                    their dreams into reality and shaping a future worth
                    embracing.
                  </p>

                  <div className="divider mt-[52px]" />

                  <div className="mt-12 flex items-center gap-8">
                    <div className="rounded-[20px] border border-foreground px-2.5 py-2.5 font-roboto-mono text-[15px] text-center tracking-[1px]">
                      02
                    </div>
                    <h3 className="font-syne text-[32px] uppercase">
                      Innovation
                    </h3>
                  </div>
                  <p className="font-satoshi text-[18px] leading-[31px] mt-4 ml-[72px]">
                    Innovation is at the core of everything we do. We embrace
                    curiosity, explore uncharted
                    <br />
                    territories, and challenge the status quo. By pushing
                    boundaries and thinking outside the box,
                    <br />
                    we create groundbreaking solutions that disrupt industries and
                    inspire audiences.
                  </p>

                  <div className="divider mt-[52px]" />

                  <div className="mt-12 flex items-center gap-8">
                    <div className="rounded-[20px] border border-foreground px-2.5 py-2.5 font-roboto-mono text-[15px] text-center tracking-[1px]">
                      03
                    </div>
                    <h3 className="font-syne text-[32px] uppercase">
                      Connection
                    </h3>
                  </div>
                  <p className="font-satoshi text-[18px] leading-[31px] mt-4 ml-[72px]">
                    We believe in the power of connection. We strive to build
                    bridges between brands and their
                    <br />
                    audiences, fostering genuine and lasting relationships.
                    Through compelling storytelling and
                    <br />
                    meaningful interactions, we create experiences that evoke
                    emotions, strengthen bonds, and
                    <br />
                    cultivate trust, ultimately turning customers into brand
                    advocates.
                  </p>
                </div>
              </div>
            </section>

            <div className="divider mt-16" />

            <section className="mt-16">
              <div className="grid grid-cols-[2fr_1fr] gap-16">
                <div>
                  <span className="font-roboto-mono text-[15px] uppercase tracking-[1px]">
                    Contact
                  </span>
                  <h2 className="font-syne text-[96px] leading-[96px] mt-3">
                    Let's bring your
                    <br />
                    brand to the next
                    <br />
                    level
                  </h2>
                  <div className="w-[100px] h-[101px] bg-gray-300 mt-[200px]" />
                </div>
                <div className="flex gap-16">
                  <div className="w-px h-[618px] bg-foreground" />
                  <div>
                    <p className="font-satoshi text-[28px] leading-[42px]">
                      Together, let's elevate your brand to new
                      <br />
                      heights by unleashing its full potential and
                      <br />
                      captivating your target audience.
                    </p>
                    <button className="button-primary mt-[461px]">
                      Our Services
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <div className="divider mt-16" />

            <section className="mt-16">
              <div className="flex justify-between items-center">
                <h2 className="section-title">Latest News</h2>
                <button className="button-secondary">See all</button>
              </div>
              <div className="divider mt-16" />
              <div className="mt-16 grid grid-cols-3 gap-12">
                <article>
                  <a href="#" className="block">
                    <div className="w-full h-[290px] bg-gray-300 rounded-2xl" />
                    <span className="font-roboto-mono text-[15px] uppercase tracking-[1px] mt-4 block">
                      Branding
                    </span>
                    <h3 className="font-syne text-[24px] leading-[31px] mt-4">
                      Things to Look for When Comparing Branding
                      <br />
                      Alternatives
                    </h3>
                  </a>
                </article>
                <article>
                  <a href="#" className="block">
                    <div className="w-full h-[290px] bg-gray-300 rounded-2xl" />
                    <span className="font-roboto-mono text-[15px] uppercase tracking-[1px] mt-4 block">
                      Branding
                    </span>
                    <h3 className="font-syne text-[24px] leading-[31px] mt-4">
                      5 Stand-out Features of Branding You Should
                      <br />
                      Know
                    </h3>
                  </a>
                </article>
                <article>
                  <a href="#" className="block">
                    <div className="w-full h-[290px] bg-gray-300 rounded-2xl" />
                    <span className="font-roboto-mono text-[15px] uppercase tracking-[1px] mt-4 block">
                      Branding
                    </span>
                    <h3 className="font-syne text-[24px] leading-[31px] mt-4">
                      Branding: What Real Customers Have to Say
                    </h3>
                  </a>
                </article>
              </div>
            </section>
          </main>

          <footer className="px-12 pb-16">
            <div className="divider" />
            <div className="mt-16 grid grid-cols-[1fr_1fr_2fr] gap-16">
              <div>
                <a href="/" className="block w-[139px]">
                  <div className="w-[139px] h-[50px] bg-gray-300" />
                </a>
                <address className="font-satoshi text-[18px] leading-[31px] mt-10 not-italic">
                  Fylla Digital Agency
                  <br />
                  Main Street 16
                  <br />
                  Lisbon
                </address>
                <div className="flex gap-2 mt-[108px]">
                  <a href="#" className="social-link">
                    TW
                  </a>
                  <a href="#" className="social-link">
                    IN
                  </a>
                  <a href="#" className="social-link">
                    Be
                  </a>
                </div>
              </div>

              <div className="flex gap-16">
                <div className="w-px h-[303px] bg-foreground" />
                <div>
                  <h3 className="font-syne text-[24px]">Pages</h3>
                  <nav className="mt-9 flex flex-col gap-3">
                    <a href="#" className="nav-link">
                      Home
                    </a>
                    <a href="#" className="nav-link">
                      Services
                    </a>
                    <a href="#" className="nav-link">
                      Studio
                    </a>
                    <a href="#" className="nav-link">
                      Contact
                    </a>
                  </nav>
                  <button className="button-primary mt-7">More Templates</button>
                </div>
              </div>

              <div className="flex gap-16">
                <div className="w-px h-[303px] bg-foreground" />
                <div className="grid grid-cols-2 gap-16">
                  <div>
                    <h3 className="font-syne text-[24px]">CMS</h3>
                    <nav className="mt-10 flex flex-col gap-3">
                      <a href="#" className="nav-link">
                        Work
                      </a>
                      <a href="#" className="nav-link">
                        Work Single
                      </a>
                      <a href="#" className="nav-link">
                        Blog
                      </a>
                      <a href="#" className="nav-link">
                        Blog Post
                      </a>
                      <a href="#" className="nav-link">
                        Shop
                      </a>
                      <a href="#" className="nav-link">
                        Shop Single
                      </a>
                    </nav>
                  </div>
                  <div>
                    <h3 className="font-syne text-[24px]">Utility Pages</h3>
                    <nav className="mt-9 flex flex-col gap-3">
                      <a href="#" className="nav-link">
                        404 Error Page
                      </a>
                      <a href="#" className="nav-link">
                        Password Protected
                      </a>
                      <a href="#" className="nav-link">
                        Styleguide
                      </a>
                      <a href="#" className="nav-link">
                        Licensing
                      </a>
                      <a href="#" className="nav-link">
                        Changelog
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
            </div>

            <div className="divider mt-16" />

            <div className="mt-12 flex justify-between items-center font-roboto-mono text-[15px] uppercase tracking-[1px]">
              <div className="flex gap-6">
                <p>© Made by Pawel Gola</p>
                <p>- Powered by Webflow</p>
              </div>
              <div className="flex gap-8">
                <a href="#" className="hover:underline">
                  Privacy
                </a>
                <a href="#" className="hover:underline">
                  Imprint
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
