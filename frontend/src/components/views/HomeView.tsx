import React from 'react';
import {
  ArrowRight, AlertCircle, Target, BarChart3, Database, Network,
  Lightbulb, Rocket, Layers3, BrainCircuit, FileText, Dna
} from 'lucide-react';
import proteinIllustration from '../../assets/protein-illustration.png';

interface HomeViewProps {
  onNavigate: (tab: string) => void;
}

const ink = '#111111';
const muted = '#46505f';
const green = '#18c94b';

const introCards = [
  {
    title: 'The challenge',
    headline: 'Different protein-design tasks need different information.',
    text: 'Protein language models, structural descriptors, and graph-based representations each capture distinct aspects of protein biology. Choosing the right representation is often based on prior experience, intuition, or trial and error — and training large models for each choice is expensive.',
    color: '#ff3152',
    Icon: AlertCircle
  },
  {
    title: 'Our approach',
    headline: 'Hold the task constant. Change the representation.',
    text: 'RepPred systematically compares five widely used protein representations using the same experimental data, train/test splits, and evaluation framework to identify which representation best captures the information needed for the task at hand.',
    color: green,
    Icon: Target,
    callout: true
  },
  {
    title: 'Why it matters',
    headline: 'More informed choices for protein design.',
    text: 'By identifying task-relevant representations, RepPred can help reduce unnecessary computational cost, improve predictive performance, and accelerate protein design workflows.',
    color: '#b12cff',
    Icon: BarChart3,
    vision: true
  }
];

const steps = [
  { title: '1. Experimental data', text: 'Protein mutations with measured ΔΔG values (FireProt).', color: '#2865ff', Icon: Database },
  { title: '2. Protein representations', text: 'Five complementary representations (sequence, ESM, 3D structure, contact map, graph).', color: '#08b8d4', Icon: Network },
  { title: '3. Model evaluation', text: 'Compare the five representations under the same task, data splits, and evaluation framework.', color: '#bd25ff', Icon: BarChart3 },
  { title: '4. Biological insights', text: 'Identify which representations capture the most useful information for the task, and explore why.', color: '#19c84c', Icon: Lightbulb }
];

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => (
  <div className="repred-home">
    <style>{`
      .repred-home{width:100%;max-width:1440px;margin:-14px auto 0;color:${ink};font-family:Inter,Arial,sans-serif}
      .rp-hero{display:grid;grid-template-columns:1.05fr .95fr;align-items:center;gap:24px;min-height:330px;padding:8px 10px 22px}
      .rp-kicker{display:flex;align-items:center;gap:10px;font-size:12px;font-weight:650;letter-spacing:.015em;color:#26313e;margin-bottom:20px}
      .rp-kicker svg{color:#19bd42}
      .rp-hero h1{font-size:clamp(34px,3.2vw,48px);line-height:1.12;letter-spacing:-.045em;font-weight:850;margin:0 0 16px;max-width:700px}
      .rp-hero p{font-size:17px;line-height:1.55;color:#111;margin:0;max-width:650px}
      .rp-hero-art{height:310px;position:relative;display:flex;align-items:center;justify-content:center;min-width:0}
      .rp-hero-art img{width:min(100%,470px);height:315px;object-fit:contain;position:relative;z-index:1}
      .rp-mutation{position:absolute;right:3%;top:10%;z-index:2;background:#fff;border:1px solid #d9dce0;border-radius:7px;padding:9px 12px;box-shadow:0 2px 8px #00000008;font-size:13px;line-height:1.35}
      .rp-handnote{position:absolute;right:1%;bottom:9%;z-index:2;color:#777;font-family:cursive;font-size:14px;line-height:1.35;transform:rotate(-5deg);max-width:175px}
      .rp-intro{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;margin:0 0 16px}
      .rp-card{background:#fff;border:1px solid #e4e5e6;border-radius:9px;padding:19px 20px;box-shadow:0 1px 2px #11100005;min-width:0}
      .rp-card-label{display:flex;align-items:center;gap:12px;font-size:14px;font-weight:750;margin-bottom:12px}
      .rp-card h2{font-size:22px;line-height:1.2;letter-spacing:-.035em;margin:0 0 9px;font-weight:820}
      .rp-card p{font-size:13px;line-height:1.48;color:${muted};margin:0}
      .rp-callout{display:flex;align-items:center;gap:12px;border-radius:7px;background:#f1fbe7;padding:12px 13px;margin-top:15px;font-size:12px;line-height:1.45}
      .rp-callout svg{color:#21c84b;flex:none}
      .rp-vision{background:#f7efff;color:#4c3481}
      .rp-vision svg{color:#a72bff}
      .rp-workflow{background:#fff;border:1px solid #e4e5e6;border-radius:10px;padding:19px 20px 15px;margin-bottom:16px}
      .rp-section-kicker{display:flex;align-items:center;gap:10px;font-size:13px;font-weight:650;color:#26313e;margin-bottom:8px}
      .rp-section-kicker:before{content:'';width:22px;height:4px;background:#15cf79;border-radius:8px}
      .rp-workflow h2,.rp-explore h2{font-size:27px;letter-spacing:-.04em;line-height:1.15;margin:0 0 3px;font-weight:850}
      .rp-subtitle{font-size:14px;color:${muted};margin:0 0 15px;line-height:1.4}
      .rp-steps{display:grid;grid-template-columns:1fr 24px 1fr 24px 1fr 24px 1fr;gap:8px;align-items:center}
      .rp-step{border:1px solid #e0e2e5;border-radius:7px;padding:13px 14px;min-height:126px;background:#fff}
      .rp-step-head{display:flex;align-items:center;gap:10px;font-size:12px;font-weight:760;margin-bottom:8px}
      .rp-step p{font-size:12px;line-height:1.45;color:${muted};margin:0}
      .rp-step-arrow{font-size:23px;text-align:center;color:#111}
      .rp-stats{display:grid;grid-template-columns:minmax(260px,2.1fr) repeat(3,minmax(90px,.55fr));align-items:center;background:#f0fae6;border-radius:7px;padding:13px 18px;margin-top:17px;gap:12px}
      .rp-stat-intro{display:flex;align-items:center;gap:14px}
      .rp-stat-intro svg{color:#16bd66;flex:none}
      .rp-stat-intro strong{display:block;font-size:14px;margin-bottom:3px}
      .rp-stat-intro span{display:block;font-size:12px;color:#303b32}
      .rp-stat{text-align:center;border-left:1px solid #d3dfcf}
      .rp-stat strong{display:block;font-size:21px;line-height:1.1;color:#075a2a;font-weight:850}
      .rp-stat span{font-size:12px;color:#27352c}
      .rp-explore{padding:8px 9px 0}
      .rp-explore .rp-section-kicker:before{background:#2865ff}
      .rp-explore-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:13px;margin:14px 0}
      .rp-nav-card{display:flex;align-items:flex-start;gap:14px;text-align:left;background:#fff;border:1px solid #e0e2e5;border-radius:8px;padding:18px 17px;min-height:116px;cursor:pointer;color:inherit;width:100%;transition:box-shadow .15s,transform .15s}
      .rp-nav-card:hover{box-shadow:0 5px 18px #11111110;transform:translateY(-2px)}
      .rp-nav-icon{flex:none}
      .rp-nav-content{flex:1;min-width:0}
      .rp-nav-content strong{display:block;font-size:16px;margin:0 0 5px}
      .rp-nav-content span{display:block;font-size:12px;line-height:1.45;color:${muted}}
      .rp-nav-arrow{align-self:flex-end;margin-left:auto;flex:none}
      .rp-community{display:flex;align-items:center;gap:16px;background:#f0f0ef;border-radius:7px;padding:15px 20px;margin:0 9px 25px}
      .rp-community>svg{flex:none;color:#21344f}
      .rp-community-copy{flex:1}
      .rp-community-copy strong{font-size:14px;display:block;margin-bottom:3px}
      .rp-community-copy span{font-size:12px;line-height:1.4;color:${muted};display:block}
      .rp-learn{background:#111;color:white;border:0;border-radius:5px;padding:11px 16px;font-size:12px;font-weight:700;display:flex;align-items:center;gap:9px;white-space:nowrap;cursor:pointer}
      .rp-footer{border-top:1px solid #dedede;margin:0 9px;padding:14px 0 0;display:flex;align-items:center;gap:10px;font-size:11px;color:#4c5664}
      .rp-footer strong{color:#111}
      .rp-footer nav{margin-left:auto;display:flex;gap:15px}
      .rp-footer button{border:0;background:none;color:inherit;font:inherit;cursor:pointer}
      @media(max-width:900px){
        .rp-hero{grid-template-columns:1fr  .85fr;min-height:290px}
        .rp-hero h1{font-size:34px}
        .rp-steps{grid-template-columns:1fr 18px 1fr;row-gap:12px}
        .rp-step-arrow:nth-of-type(4){display:none}
        .rp-stats{grid-template-columns:1fr repeat(3,.5fr)}
      }
      @media(max-width:650px){
        .repred-home{margin-top:-8px}
        .rp-hero{grid-template-columns:1fr;gap:0;padding:12px 4px 18px}
        .rp-hero h1{font-size:34px}
        .rp-hero-art{height:260px}
        .rp-hero-art img{height:260px}
        .rp-mutation{right:0;top:0}
        .rp-handnote{right:0;bottom:0}
        .rp-intro,.rp-explore-grid{grid-template-columns:1fr}
        .rp-card{padding:18px}
        .rp-workflow{padding:17px 14px}
        .rp-steps{grid-template-columns:1fr;gap:9px}
        .rp-step-arrow{display:none}
        .rp-step{min-height:0}
        .rp-stats{grid-template-columns:1fr 1fr;gap:12px}
        .rp-stat-intro{grid-column:1/-1}
        .rp-stat:nth-child(2){border-left:0;text-align:left}
        .rp-community{align-items:flex-start;flex-wrap:wrap;margin:0 0 20px}
        .rp-learn{margin-left:45px}
        .rp-footer{flex-wrap:wrap}
        .rp-footer nav{width:100%;margin:8px 0 0;flex-wrap:wrap}
      }
    `}</style>

    <section className="rp-hero">
      <div>
        <div className="rp-kicker"><Dna size={17} /> PROTEIN REPRESENTATION BENCHMARK</div>
        <h1>RepPred evaluates protein representation choices for a specific design task.</h1>
        <p><strong>Prototype task:</strong> Predict mutation-level effects on the protein stability factor (ΔΔG).</p>
      </div>
      <div className="rp-hero-art">
        <img src={proteinIllustration} alt="Three-dimensional protein structure with highlighted mutation residues" />
        <div className="rp-mutation"><strong>Ala → Val</strong><br/>ΔΔG = -1.2 kcal/mol</div>
        <div className="rp-handnote">Same protein.<br/>Different representations.<br/>Which one captures<br/>what matters?</div>
      </div>
    </section>

    <section className="rp-intro">
      {introCards.map(({title,headline,text,color,Icon,callout,vision})=>(
        <article className="rp-card" key={title}>
          <div className="rp-card-label"><Icon size={25} color={color}/>{title}</div>
          <h2>{headline}</h2>
          <p>{text}</p>
          {callout && <div className="rp-callout"><Lightbulb size={28}/><span>The goal is not to try everything,<br/>but to <strong>use what matters.</strong></span></div>}
          {vision && <div className="rp-callout rp-vision"><Rocket size={29}/><span><strong>Broader vision</strong><br/>Task-aware representation selection for stability, binding, function, expression, and other protein-design objectives.</span></div>}
        </article>
      ))}
    </section>

    <section className="rp-workflow">
      <div className="rp-section-kicker">From data to insights</div>
      <h2>How RepPred works</h2>
      <p className="rp-subtitle">RepPred evaluates five protein representations on an experimental benchmark of mutation–stability effects.</p>
      <div className="rp-steps">
        {steps.map(({title,text,color,Icon},i)=>(
          <React.Fragment key={title}>
            <article className="rp-step">
              <div className="rp-step-head"><Icon size={27} color={color}/>{title}</div>
              <p>{text}</p>
            </article>
            {i<3 && <div className="rp-step-arrow" aria-hidden="true">→</div>}
          </React.Fragment>
        ))}
      </div>
      <div className="rp-stats">
        <div className="rp-stat-intro"><Database size={34}/><div><strong>The current prototype</strong><span>Mutation-level protein stability prediction using experimental ΔΔG measurements.</span></div></div>
        <div className="rp-stat"><strong>3,438</strong><span>mutations</span></div>
        <div className="rp-stat"><strong>100</strong><span>WT proteins</span></div>
        <div className="rp-stat"><strong>5</strong><span>representations</span></div>
      </div>
    </section>

    <section className="rp-explore">
      <div className="rp-section-kicker">Explore RepPred</div>
      <h2>Explore RepPred</h2>
      <p className="rp-subtitle">Dive deeper into the data, results, and model insights using the sections below.</p>
      <div className="rp-explore-grid">
        <button className="rp-nav-card" onClick={()=>onNavigate('explore')}>
          <Layers3 className="rp-nav-icon" size={34} color="#8157ff"/>
          <span className="rp-nav-content"><strong>Explore</strong><span>Discover the experimental data and the five protein representations behind RepPred.</span></span>
          <ArrowRight className="rp-nav-arrow" size={18}/>
        </button>
        <button className="rp-nav-card" onClick={()=>onNavigate('benchmark')}>
          <BarChart3 className="rp-nav-icon" size={34} color="#ff7900"/>
          <span className="rp-nav-content"><strong>Benchmark</strong><span>Compare how the representations perform on unseen mutations and proteins.</span></span>
          <ArrowRight className="rp-nav-arrow" size={18}/>
        </button>
        <button className="rp-nav-card" onClick={()=>onNavigate('interpretability')}>
          <BrainCircuit className="rp-nav-icon" size={34} color="#18c96b"/>
          <span className="rp-nav-content"><strong>Interpretability</strong><span>Explore the biological features and structural patterns that drive model predictions.</span></span>
          <ArrowRight className="rp-nav-arrow" size={18}/>
        </button>
      </div>
    </section>

    <section className="rp-community">
      <FileText size={35}/>
      <div className="rp-community-copy"><strong>A resource for the community</strong><span>RepPred provides a transparent and reproducible benchmark to guide representation choice for protein design and stability prediction tasks.</span></div>
      <button className="rp-learn" onClick={()=>onNavigate('research')}>Learn more about RepPred <ArrowRight size={15}/></button>
    </section>

    <div className="rp-footer">
      <strong>RepPred</strong><span>|</span><span>Protein Representation Benchmark</span>
      <nav>
        <button onClick={()=>onNavigate('home')}>Story</button><span>·</span>
        <button onClick={()=>onNavigate('explore')}>Explore</button><span>·</span>
        <button onClick={()=>onNavigate('benchmark')}>Benchmark</button><span>·</span>
        <button onClick={()=>onNavigate('interpretability')}>Interpretability</button>
      </nav>
    </div>
  </div>
);

export default HomeView;
