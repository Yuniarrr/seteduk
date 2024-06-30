import BaseCarousel2 from '../components/BaseCarousel2';
import Team from '../components/logo/Team';
import Dosen from '../../public/images/member/dosen.png';
import Farsya from '../../public/images/member/farsya.png';
import Keiza from '../../public/images/member/keiza.png';
import Solagracia from '../../public/images/member/solagracia.png';
import Syifaul from '../../public/images/member/syifaul.png';
import NasiTelang from '../../public/images/nasi-telang.png';

const Profile = () => {
  const members = [Dosen, Farsya, Keiza, Solagracia, Syifaul];
  const images = [NasiTelang, NasiTelang, NasiTelang];

  return (
    <div className="mt-24">
      <div className="flex flex-wrap justify-evenly items-center flex-col m-8 xl:mx-20 xl:my-20 md:flex-row gap-y-8">
        <div className="flex flex-col w-full md:gap-y-5 xl:w-1/4 md:w-1/3 accordion-up">
          <h2 className="font-bold text-2xl xl:text-5xl">
            Profil SeTeDuk Team
          </h2>
          <p className="xl:text-lg">
            Kami adalah mahasiswa Institut Teknologi Sepuluh Nopember yang
            sedang mengikuti PKM-Kewirausahaan. Dukung terus tim kami ya!
          </p>
        </div>
        <div className="w-full flex items-center justify-end xl:w-3/4 md:w-2/3">
          <Team className="lg:self-end self-center w-auto" />
        </div>
      </div>

      {/* team member */}
      <div className="flex flex-wrap justify-around items-center flex-col mx-8 xl:mx-20 md:flex-row">
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
            <h1 className="text-independence font-3xl font-semibold">PKM-K</h1>
            <p className="text-independence">
              Produk SeTeDuk merupakan produk bumbu instan nasi uduk bunga
              telang pertama di Indonesia. Produk SeTeDuk diproduksi tanpa bahan
              pengawet, sehingga aman dikonsumsi bagi semua kalangan umur hingga
              penderita diabetes yang ingin mengonsumsi nasi dengan kadar
              glukosa yang lebih rendah.
            </p>
            <p className="text-independence">
              Finally, some quick bits about me.
            </p>
            <ul className="mx-5 lg:grid lg:grid-cols-2 w-full">
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
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
