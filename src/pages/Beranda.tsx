/* eslint-disable @typescript-eslint/no-unused-vars */
import Play from '../components/logo/Play';
import Banner from '../../public/images/banner.png';
import SetedukBundle from '../../public/images/seteduk-bundle.png';
import Butel1 from '../../public/images/butel-1.png';
import Butel2 from '../../public/images/butel-2.png';
import NasiTelang from '../../public/images/nasi-telang.png';
import Sachet from '../../public/images/sachet.png';
import Pouch from '../../public/images/pouch.png';
import Shopee from '@/components/logo/Shopee';
import CaraMemasak from '../../public/images/seteduk/cara memasak.mp4';
import Ayu from '../../public/images/ayu.png';
import Deya from '../../public/images/deya.png';
import Ita from '../../public/images/ita.png';
import Mardi from '../../public/images/mardi.png';

const Beranda = () => {
  const products = [
    {
      img: Sachet,
      name: 'Sachet SeTeDuk',
      weight: 35,
      desc: 'Kemasan sachet produk SeTeDuk sangat praktis. Pada kemasan sachet SeTeDuk sudah tersedia bumbu bubuk dan minyak bumbu yang dapat langsung dituang ke dalam nasi putih hangat. ',
      price: '3.000',
    },
    {
      img: Pouch,
      name: 'Pouch SeTeDuk',
      weight: 175,
      desc: 'Kemasan pouch produk SeTeDuk berisi 4 sachet + bonus 1 sachet produk SeTeDuk. Kemasan pouch ini lebih hemat dan cocok untuk disimpan sebagai stock di rumah.',
      price: '10.000',
    },
  ];

  const testimoni = [
    {
      img: Ita,
      message:
        'Rasanya enak, gurih, sedikit ada rasa hint jamu tetapi itu yang membuat gurih. Bisa di konsumsi setiap hari karena ada claim menyehatkan',
      from: 'Ita, Tenaga Kesehatan',
    },
    {
      img: Mardi,
      message:
        'Rasanya seperti nasi uduk biasanya, aman di konsumsi sehingga saya merasa aman tidak mengkhawatirkan gula darah naik',
      from: 'Mardi, Penderita Diabetes',
    },
    {
      img: Deya,
      message: 'Enak rasanya! Harga terjangkau cocok buat anak kos akhir bulan',
      from: 'Deya, Mahasiswa',
    },
    {
      img: Ayu,
      message:
        'Enak masaknya simpel nggak ribet, bisa buat nasi tumpeng warna biru lebih praktis',
      from: 'Ayu, Pengusaha catering',
    },
  ];

  return (
    <div className="w-full -mt-1">
      {/* seteduk */}
      <div>
        <img
          src={Banner}
          alt="banner"
          className="w-full object-cover object-center absolute -z-10 2xl:-mt-10 h-40 md:h-auto"
        />
        <div className="flex flex-col md:flex-row items-center md:items-start md:pt-8 justify-center md:justify-start">
          <div className="flex flex-col items-start justify-start xl:gap-y-56 xl:ml-10 xl:w-1/3 md:gap-y-32 order-last md:order-none gap-y-4 xl:pt-10 mx-8 md:mx-0">
            <div className="xl:ml-8 md:pl-10">
              <p className="lg:text-lg md:text-base md:text-white text-independence text-sm">
                #seteduk
              </p>
              <p className="lg:text-lg md:text-base md:text-white text-independence text-sm lg:w-3/4 xl:w-auto">
                Bumbu instan nasi uduk bunga telang pertama di Indonesia
              </p>
            </div>
            {/* <div> */}
            <ul className="flex flex-col flex-wrap gap-x-2 gap-y-2 xl:gap-y-3 md:pl-10  items-center md:items-start w-full">
              <li className="bg-bright-gray text-independence text-sm md:text-base px-3 rounded-xl w-fit">
                Selengkapnya Tentang SeTeDuk
              </li>
              <li className="bg-bright-gray text-independence text-sm md:text-base px-3 rounded-xl w-fit">
                Cara Penyajian SeTeDuk
              </li>
            </ul>
            {/* </div> */}
          </div>
          <div>
            <img
              src={Butel1}
              alt=""
              className="hidden xl:block absolute xl:mt-[14%] 2xl:mt-[13%] 2xl:-ml-[7%] xl:-ml-[8%] animate-bounce"
            />
            <img
              src={Butel2}
              alt=""
              className="hidden xl:block absolute 2xl:ml-[30%] xl:ml-[38%] animate-bounce"
            />
            <img
              src={SetedukBundle}
              alt="Bundle Seteduk"
              className="h-64 mt-4 md:mt-0 md:h-auto"
            />
          </div>
        </div>
      </div>

      {/* about seteduk */}
      <div className="flex flex-wrap justify-around items-center flex-col m-8 xl:mx-20 xl:my-20 md:flex-row gap-y-8">
        {/* left content */}
        <div className="md:w-1/2 justify-center">
          <div className="md:mr-5 lg:mr-10 flex items-center justify-center">
            <div className="flex flex-col gap-y-4 bg-american-blue rounded-xl p-3 md:p-5 lg:py-7 items-center justify-center w-full md:w-11/12 lg:w-4/5 xl:w-2/3">
              <img
                src={NasiTelang}
                className="rounded-lg"
              />
              <div className="rounded-full bg-white h-10 w-10 m-auto flex items-center justify-center">
                <Play
                  width={10}
                  height={10}
                />
              </div>
            </div>
          </div>
        </div>

        {/* right content */}
        <div className="md:w-1/2">
          <h3 className="text-eerie-black font-semibold text-xl lg:text-xl xl:text-2xl">
            About SeTeDuk
          </h3>
          <p className="basic-text">
            Produk SeTeDuk merupakan produk bumbu instan nasi uduk bunga telang
            pertama di Indonesia. Produk SeTeDuk diproduksi tanpa bahan
            pengawet, sehingga aman dikonsumsi bagi semua kalangan umur hingga
            penderita diabetes yang ingin mengonsumsi nasi dengan kadar glukosa
            yang lebih rendah.
          </p>
          <p className="basic-text">
            Produk SeTeDuk sangat praktis dan mudah dalam penyajiannya. SeTeDuk
            dapat disajikan dengan mencampur langsung bumbu bubuk dan minyak
            bumbu ke dalam nasi putih hangat yang telah matang, kemudian diaduk
            rata, dan nasi uduk bunga telang sudah siap untuk disantap. Nasi
            uduk bunga telang SeTeDuk dapat dihidangkan dengan berbagai lauk
            pauk dan sayuran pendamping.
          </p>
          <p className="basic-text">
            Produk SeTeDuk tersedia dalam 2 varian kemasan, yaitu kemasan sachet
            dan kemasan pouch.
          </p>
          {/* <p className="basic-text">
            When I'm not in full-on developer mode, you can find me hovering
            around on twitter or on indie hacker, witnessing the journey of
            early startups or enjoying some free time. You can follow me on
            Twitter where I share tech-related bites and build in public, or you
            can follow me on GitHub.
          </p>
          <p className="basic-text">Finally, some quick bits about me.</p>
          <ul className="mx-5 md:grid md:grid-cols-2">
            <li className="text-independence list-disc">
              Computer Engineering
            </li>
            <li className="text-independence list-disc">Fulltime Freelancer</li>
            <li className="text-independence list-disc">Avid learner</li>
            <li className="text-independence list-disc">
              Aspiring indie hacker
            </li>
          </ul>
          <p className="basic-text">
            One last thing, I'm available for freelance work, so feel free to
            reach out and say hello! I promise I don't bite 😉
          </p> */}
        </div>
      </div>

      {/* product */}
      <div className="flex flex-wrap justify-around items-center flex-row py-14 xl:my-10 gap-y-8 bg-cadmium-green w-full">
        <div className="basis-7/12 w-full flex flex-col items-center justify-center gap-y-5">
          {/* title */}
          <div className="rounded-xl text-eerie-black bg-bright-gray px-4 py-1 w-fit">
            Produk Kami
          </div>

          {/* list produk */}
          <div className="flex flex-row md:flex-row flex-wrap md:items-stretch items-center justify-center w-full xl:gap-x-20 gap-y-8">
            {products.map((product) => (
              <div className="bg-bright-gray py-5 rounded-xl flex flex-col gap-y-3 items-center justify-stretch lg:w-1/4 xs:px-10 min-w-72">
                <img
                  className="rounded-xl"
                  src={product.img}
                  alt=""
                />
                <div className="flex items-center justify-center flex-col">
                  <h5 className="text-eerie-black font-bold text-lg">
                    {product.name}
                  </h5>
                  <p className="text-independence text-sm">
                    {product.weight} g
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:basis-5/12 w-full px-5 flex flex-col gap-y-5">
          <p className="text-white text-xl font-semibold text-center md:text-start">
            Apa kata mereka...
          </p>
          <div className="flex flex-col gap-y-5 items-center justify-center md:items-start md:justify-start w-full">
            {testimoni.map((testi) => (
              <div className="rounded-xl flex flex-row gap-x-5 items-center justify-center">
                <img
                  src={testi.img}
                  alt=""
                  className="rounded-full w-14 h-14"
                />
                <p className="text-white text-start">
                  "{testi.message}" - {testi.from}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* detail produk */}
      <div className="flex flex-wrap justify-around items-center flex-col m-8 xl:mx-20 xl:my-16 gap-y-8">
        {products.map((product, index) => (
          <div className="shadow-md rounded-xl flex flex-wrap flex-col md:flex-row justify-around items-center p-7 gap-y-7 w-full">
            {/* tulisan */}
            <div
              className={`md:w-1/2 ${
                index % 2 === 0 ? 'order-none' : 'md:order-last'
              }`}>
              <h3 className="text-eerie-black font-bold text-lg">
                {product.name}
              </h3>
              <p className="basic-text">{product.desc}</p>
              <ul className="flex flex-row flex-wrap gap-x-2 gap-y-3">
                {/* {lists.map((_) => ( */}
                <li className="bg-bright-gray text-independence px-3 rounded-lg">
                  Rp {product.price}
                </li>
                {/* ))} */}
              </ul>
              <div className="my-4 cursor-pointer">
                <Shopee />
              </div>
            </div>
            {/* gambar */}
            <div className="md:w-1/2 flex items-center justify-center">
              <img
                src={product.img}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>

      {/* saran penyajian */}
      <div className="flex flex-wrap justify-around items-center flex-col py-8 xl:mt-20 gap-y-5 bg-american-blue">
        <h1 className="text-white font-xl font-semibold">
          Cara Penyajian SeTeDuk
        </h1>
        {/* <img
          className="rounded-xl w-2/3 md:1/2 lg:w-2/5 xl:w-2/6"
          src={NasiTelang}
          alt=""
        /> */}
        <video
          className="rounded-xl w-2/3 md:1/2 lg:w-2/5 xl:w-2/6"
          autoPlay
          muted
          loop>
          <source src={CaraMemasak} />
        </video>
      </div>
    </div>
  );
};

export default Beranda;
