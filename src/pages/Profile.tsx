import BaseCarousel2 from '../components/BaseCarousel2';
import Team from '../../public/images/team.png';
import Dosen from '../../public/images/member/dosen.png';
import Farsya from '../../public/images/member/farsya.png';
import Keiza from '../../public/images/member/keiza.png';
import Solagracia from '../../public/images/member/solagracia.png';
import Syifaul from '../../public/images/member/syifaul.png';
import Img1 from '../../public/images/seteduk/img-1.jpg';
import Img2 from '../../public/images/seteduk/img-2.jpg';
import Img3 from '../../public/images/seteduk/img-3.jpg';
import Img4 from '../../public/images/seteduk/img-4.jpg';
import Img5 from '../../public/images/seteduk/img-5.jpg';

const Profile = () => {
  const members = [Dosen, Farsya, Keiza, Solagracia, Syifaul];
  const images = [Img1, Img2, Img3, Img4, Img5];

  return (
    <div className="mt-24 md:mt-0">
      <div className="flex flex-wrap md:relative">
        <div className="flex flex-wrap justify-start items-start flex-col mx-5 xl:mx-20 xl:my-20 md:flex-col gap-y-2 w-full">
          <h2 className="font-bold text-2xl xl:text-5xl">Dibalik Layar</h2>
          <h2 className="font-thin text-2xl xl:text-5xl">PKM-K SeTeDuk</h2>
          <p className="xl:text-lg md:w-1/4 w-full">
            Kami adalah mahasiswa Institut Teknologi Sepuluh Nopember yang
            sedang mengikuti PKM-Kewirausahaan. Dukung terus tim kami ya!
          </p>
        </div>
        <img
          className="md:absolute md:-z-10 md:mt-24"
          src={Team}
          alt=""
        />
      </div>

      {/* team member */}
      <div className="flex flex-wrap justify-around items-center flex-col mx-8 xl:mx-20 md:flex-row md:mt-80 mt-5 lg:mt-96">
        <BaseCarousel2
          autoSlide={true}
          slides={members}
        />
      </div>

      {/* deatil */}
      <div className=" py-8 lg:mt-8 mt-4 bg-cadmium-green">
        <div className="bg-white flex flex-wrap justify-around items-center flex-col md:flex-row py-10 mx-5 px-5 md:px-10 gap-y-5">
          <div className="rounded-xl w-full md:w-1/2 border-4 border-cadmium-green p-4">
            <BaseCarousel2
              autoSlide={true}
              slides={images}
              hideArrow={true}
              customGap={'mt-3'}
            />
          </div>
          <div className="flex flex-col items-start md:px-8 md:w-1/2 w-full justify-center gap-y-3">
            <h1 className="text-eerie-black text-2xl font-semibold">PKM-K</h1>
            <p className="text-independence">
              Program Kreativitas Mahasiswa Kewirausahaan (PKM-K) merupakan
              program kreativitas mahasiswa yang berfokus dalam menciptakan
              aktivitas usaha. Dalam PKM-K, tim mahasiswa berlatih membuat
              kreativitas produk usaha yang dibutuhkan masyarakat (pasar).
            </p>
            <p className="text-independence">
              Kelompok kami membuat produk SeTeDuk, Sego Telang Uduk. SeTeDuk
              merupakan bumbu bubuk nasi uduk bunga telang instan pertama di
              Indonesia.
            </p>
            {/* <ul className="mx-5 lg:grid lg:grid-cols-2 w-full">
              <li className="text-independence list-disc">
                Computer Engineering
              </li>
              <li className="text-independence list-disc">
                Fulltime Freelancer
              </li>
              <li className="text-independence list-disc">Avid learner</li>
              <li className="text-independence list-disc">
                Aspiring indie hacker
              </li>
            </ul>
            <p className="text-independence">
              One last thing, I'm available for freelance work, so feel free to
              reach out and say hello! I promise I don't bite 😉
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
