
const Button = (props) => {
    let {classes,size,variant,disabled,href,color,children} = props;
    const usualClass = ' text-2xl font-sans p-3 rounded hover:rounded duration-200 ';
    const medium = usualClass.replace('text-2xl','text-3xl');
    const large = usualClass.replace('text-2xl','text-4xl');
  
    const checkSize = () => {
        if(!size || size === 'small' ) return usualClass;
        if(size === 'medium') return medium;
        if(size === 'large') return large;
    }

    // START PRIMARY
    const primaryText = checkSize() +
    'text-[#1976d2] hover:bg-[#1976d2] hover:bg-opacity-10';

    const primaryContained = checkSize() + 
        'text-[#fff] bg-[#1976d2] hover:bg-[#1565c0]';

    const primaryOutlined = checkSize() + 
    'text-[#1976d2] border border-2 border-[#1976d2] hover:bg-[#1976d2] hover:bg-opacity-10';
    // END PRIMARY

    /// START COLORS
    const secondaryText = checkSize() +
    'text-[#9c27b0] hover:bg-[#9c27b0] hover:bg-opacity-10';
    
    const secondaryContained = checkSize() +
    'text-[#fff] bg-[#9c27b0] hover:bg-[#7b1fa2]';
    
    const secondaryOutlined = checkSize() +
    'text-[#9c27b0] border-2 border-[#9c27b0] hover:bg-[#9c27b0] hover:bg-opacity-10';
    
    const successText = checkSize() + 
    'text-[#2e7d32] hover:bg-[#2e7d32] hover:bg-opacity-10';

    const successContained = checkSize() + 
    'text-[#fff] bg-[#2e7d32] hover:bg-[#1b5e20]';

    const successOutlined = checkSize() + 
    'text-[#2e7d32] border-2 border-[#2e7d32] hover:bg-[#2e7d32] hover:bg-opacity-10';

    const errorText = checkSize() + 
    'text-[#d32f2f] hover:bg-[#d32f2f] hover:bg-opacity-10';

    const errorContained = checkSize() + 
    'text-[#fff] bg-[#d32f2f] hover:bg-[#921f1f]';

    const errorOutlined = checkSize() + 
    'text-[#d32f2f] border-2 border-[#d32f2f] hover:bg-[#d32f2f] hover:bg-opacity-10';

    //////////END
    
    /////////Start Disables
    const disableText = checkSize() + 
    'text-[#1C2025] text-opacity-10';

    const disableContained = checkSize() + 
    'text-[#000] text-opacity-20 bg-[#1C2025] bg-opacity-10';

    const disableOutlined = checkSize() + 
    'text-[#d32f2f] text-[#000] text-opacity-20 border-2 border-[#1C2025] border-opacity-20';
    
    /////////END Disables

    if(variant === 'text' || !variant) {
        classes = primaryText;
        if(color === 'secondary') {
            classes = secondaryText;
        } else if(color === 'success') {
            classes = successText;
        } else if(color === 'error') {
            classes = errorText;
        }

        if(disabled) {
            classes = disableText;
        } 
    }

    if(variant === 'contained'){
        classes = primaryContained;
        if(color === 'secondary') {
            classes = secondaryContained;
        } else if(color === 'success') {
            classes = successContained;
        } else if(color === 'error') {
            classes = errorContained;
        }

        if(disabled) {
            classes = disableContained;
        } 
    }

    if(variant === 'outlined'){
        classes = primaryOutlined;
        if(color === 'secondary') {
            classes = secondaryOutlined;
        } else if(color === 'success') {
            classes = successOutlined;
        } else if(color === 'error') {
            classes = errorOutlined;
        }

        if(disabled) {
            classes = disableOutlined;
        } 
    } 
        
    href ? children = <a href={href}>{children}</a> : children = children;


    return <button 
    size={size}
    className={props.className ? props.className + classes : classes}
    variant={variant}
    disabled={disabled}
    href={href}
    color={color} 
    onClick={props.onClick}>
        {children}
    </button>
}

export default Button;