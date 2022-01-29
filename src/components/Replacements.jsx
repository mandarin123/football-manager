import React from 'react';
import { connect } from 'react-redux';

const Replacements = ({replacements, removeReplacement}) => {
  return (
      <section>
          <h2>Replacements</h2>
          <div className="replacement">
              {
                replacements.map(p => (
                    <article className='replacement' key={p.id}>
                        <div>
                            <img src={p.img} alt={p.name} />
                            <button onClick={() => removeReplacement(p)}>X</button>
                        </div>
                        <p>{p.name}</p>
                    </article>
                ))
              }
          </div>
      </section>
  );
};

const mapStateToProps = state => ({
    replacements: state.replacements
});
  
const mapDispatchToProps = dispatch => ({
    removeReplacement(player){
        dispatch({
            type: "REMOVE_REPLACEMENT",
            player
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Replacements);
