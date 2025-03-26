import crane from "@/assets/crane.png";
import welder from "@/assets/welder.png";
import link from "@/assets/link.png";
const About = () => {
  return (
    <div className="flex flex-col items-center gap-[39px] md:gap-[30px]  px-[50px] md:px-5">
      <h1 className="font-medium md:text-[32px]">Rreth Nesh</h1>
      <p className="text-[24px] md:text-[16px] ">
        DST-Product është një kompani e përkushtuar për të sjellë cilësi dhe
        përsosmëri në çdo projekt që ndërmarrim. Që nga viti 2007, kemi ndërtuar
        një reputacion të fortë në konstruksionet metalike, duke filluar me
        struktura të lehta si serrat dhe duke u zgjeruar drejt projekteve më të
        mëdha dhe më komplekse.
        <br /> <br />
        Merremi me prodhimin dhe ndërtimin e konstruksioneve metalike, përfshirë
        shkallë të personalizuara, krana industrialë (2T, 5T e më shumë) dhe
        prodhim në seri, gjithmonë duke iu përshtatur standardeve më të larta të
        industrisë.
        <br /> <br />
        Me kalimin e viteve, kemi përmirësuar vazhdimisht proceset tona duke u
        përshtatur me trendet dhe kërkesat e tregut. Çdo projekt është një
        kombinim i eksperiencës, teknologjisë dhe mjeshtërisë, duke garantuar
        qëndrueshmëri, funksionalitet dhe dizajn të përkryer.
      </p>
      <div className="flex flex-row  gap-5 md:gap-[6px] w-full">
        <div className="flex flex-col gap-5 md:gap-[6px] w-1/2">
          <img
            src={welder}
            alt=""
            className="rounded-[30px] md:rounded-[10px] object-cover"
          />
          <img
            src={crane}
            alt=""
            className="rounded-[30px] md:rounded-[10px] object-cover"
          />
        </div>
        <img
          src={link}
          alt=""
          className="rounded-[30px] md:rounded-[10px] w-1/2"
        />
      </div>
    </div>
  );
};

export default About;
