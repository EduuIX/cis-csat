import './tag.css';

interface CeiProps {
    cod1: string;
    cod2: string;
    cls: string;
};

const Tag: React.FC<CeiProps>  = ({ cod1, cod2, cls }) => {
    return(
        <section className={`sub-tag ${cls}`}>
            <p >{cod1}</p>
            <p className='cd2'>{cod2}</p>
        </section>
    );
}
export {Tag};