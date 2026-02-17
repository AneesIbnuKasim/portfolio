const Background = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden bg-bg-primary transition-colors duration-300">
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/30 dark:bg-purple-600/30 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-float" />
            <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/20 dark:bg-blue-600/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-float [animation-delay:2s]" />
            <div className="absolute bottom-[-10%] left-[20%] w-[400px] h-[400px] bg-cyan-600/20 dark:bg-cyan-600/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-float [animation-delay:4s]" />
            <div className="absolute w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        </div>
    );
};

export default Background;
