
const Button = (props) => {
    const usualClass = ' text-2xl font-sans p-3 rounded hover:rounded duration-200';
    let classes;


    /////////////////// VARIENTS////////////////////////
    // text
    if(props.variant === 'text' || !props.variant) {
        if(!props.color) {
            classes = `${usualClass} text-[#1976d2] hover:bg-[#1976d2] hover:bg-opacity-10`
        } 
    }
    
    // contained
    if(props.variant === 'contained') {
        if(!props.color) {
            classes = `${usualClass} text-[#fff] bg-[#1976d2] hover:bg-[#1565c0]`
        }
    }
   
    // outlined
    if(props.variant === 'outlined') {
        if(!props.color) {
            classes = `${usualClass} text-[#1976d2] border border-2 border-[#1976d2] hover:bg-[#1976d2] 
            hover:bg-opacity-10`
        }
    }

    // disabled
    if(props.disabled && props.variant === 'text' || props.disabled) {
        classes = `${usualClass} text-[#1C2025] text-opacity-10`
    }

    if(props.disabled && props.variant === 'contained') {
        classes = `${usualClass} text-[#000] text-opacity-20 bg-[#1C2025] bg-opacity-10`
    }

    if(props.disabled && props.variant === 'outlined') {
        classes = `${usualClass} text-[#000] text-opacity-20 border-2 border-[#1C2025] 
        bg-opacity-10 border-opacity-20`
    }

    //Link 
    if(props.href) {
        return <button
        size={props.size} 
        variant={props.variant}
        className={props.className ? props.className + classes : classes}
        disabled={props.disabled}
        href={props.href}
        color={props.color} 
        onClick={props.onClick}>
            <a href={props.href}>{props.children}</a>
        </button>
    }

    if(props.href && props.variant === 'contained') {
        if(!props.color) {
            classes = `${usualClass} text-[#fff] bg-[#1976d2] hover:bg-[#1565c0]`
        }
    }

    if(props.href && props.variant === 'outlined') {
        if(!props.color) {
            classes = `${usualClass} text-[#1976d2] border border-[#1976d2] hover:bg-[#1976d2] 
            hover:bg-opacity-10`
        }
    }

    ////////////////////////// COLORS 
    //secondary
    if(props.color && props.color === 'secondary' && !props.variant) {
        classes = `${usualClass} text-[#9c27b0] hover:bg-[#9c27b0] 
        hover:bg-opacity-10`
    }

    if(props.color && props.color === 'secondary' && props.variant === 'contained') {
        classes = `${usualClass} text-[#fff] bg-[#9c27b0] hover:bg-[#9c27b0]`;
    }

    if(props.color && props.color === 'secondary' && props.variant === 'outlined') {
        classes = `${usualClass} text-[#9c27b0] border-2 border-[#9c27b0] 
        hover:bg-[#9c27b0] hover:bg-opacity-10 `;
    }
    
    //SUCCUSS
    if(props.color && props.color === 'success' && !props.variant) {
        classes = `${usualClass} text-[#2e7d32] hover:bg-[#2e7d32] 
        hover:bg-opacity-10`
    }

    if(props.color && props.color === 'success' && props.variant === 'contained') {
        classes = `${usualClass} text-[#fff] bg-[#2e7d32] hover:bg-[#1b5e20]`;
    }

    if(props.color && props.color === 'success' && props.variant === 'outlined') {
        classes = `${usualClass} text-[#2e7d32] border-2 border-[#2e7d32] 
        hover:bg-[#2e7d32] hover:bg-opacity-10 `;
    }

    //ERROR
    if(props.color && props.color === 'error' && !props.variant) {
        classes = `${usualClass} text-[#d32f2f] hover:bg-[#d32f2f] 
        hover:bg-opacity-10`
    }

    if(props.color && props.color === 'error' && props.variant === 'contained') {
        classes = `${usualClass} text-[#fff] bg-[#d32f2f] hover:bg-[#921f1f]`;
    }

    if(props.color && props.color === 'error' && props.variant === 'outlined') {
        classes = `${usualClass} text-[#d32f2f] border-2 border-[#d32f2f] 
        hover:bg-[#d32f2f] hover:bg-opacity-10 `;
    }


    ////////////////////////// SIZE
    // if(props.size && props.size === 'small') {
    //     const small = usualClass.replace('text-2xl','text-xl');
    //     //text
    //     if(!props.disabled && !props.color && !props.variant || props.variant === 'text') {
    //         classes = `${small} text-[#1976d2] hover:bg-[#1976d2] hover:bg-opacity-10`;
    //     }

    //     if(props.disabled) {
    //         classes = `${small} text-[#1C2025] text-opacity-10`;
    //     }

    //     if(props.color && props.color === 'secondary' && !props.variant || props.variant === 'text') {
    //         classes = `${small} text-[#9c27b0] hover:bg-[#9c27b0] hover:bg-opacity-10`;
    //     }
    // }

    // if(props.size && props.size === 'medium') {
    //     const medium = usualClass.replace('text-2xl','text-3xl');
    //     //text
    //     if(!props.color && !props.variant || props.variant === 'text') {
    //         classes = `${medium} text-[#1976d2] hover:bg-[#1976d2] hover:bg-opacity-10`;
    //     }

    //     if(props.color === 'secondary' && !props.variant || props.variant === 'text') {
    //         classes = `${medium} text-[#9c27b0] hover:bg-[#9c27b0] hover:bg-opacity-10`;
    //     }
    // }

    return <button 
    size={props.size}
    variant={props.variant}
    className={props.className ? props.className + classes : classes} 
    disabled={props.disabled}
    href={props.href}
    color={props.color} 
    onClick={props.onClick}>
    {props.children}
    </button>
}

export default Button;