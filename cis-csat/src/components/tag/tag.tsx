import './tag.css';

interface CeiProps {
    cod1: string;
    cod2: string;
    cls: string;
};

const Tag: React.FC<CeiProps>  = ({ cod1, cod2, cls }) => {
    return(
        <section className={`sub-tag ${cls}`}>
            <h5>{cod1}</h5>
            <h5 className='cd2'>{cod2}</h5>
        </section>
    );
}
export {Tag};