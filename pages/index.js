function Home() {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>O Começo de Tudo</h1>
            <h2>Natan </h2>
            <img
                src="https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg" 
                alt="Imagem especial"
                width={300}
                style={{
                    borderRadius: '10px',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                    marginTop: '20px'
                }}
            />
        </div>
    );
}

export default Home;
