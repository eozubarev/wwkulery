document.addEventListener('DOMContentLoaded', ()=>{
    (function form1() {
        const forms = [
            ...document.querySelectorAll('.form')
        ];
        const labels = [
            ...document.querySelectorAll('.form__label')
        ];
        const phones = [
            ...document.querySelectorAll('.form__phone')
        ];
        forms.forEach((form)=>{
            const submit = form.querySelector('[type="submit"]');
            const policy = form.querySelector('.form__policy-input');
            policy.addEventListener('change', ()=>{
                if (!policy.checked) submit.classList.add('disabled');
                else submit.classList.remove('disabled');
            });
        });
        labels.forEach((label)=>{
            const input = label.querySelector('.form__input');
            input.addEventListener('change', ()=>{
                if (input.value != '' && input.value.length) label.classList.add('value');
            });
        });
    })();
});

//# sourceMappingURL=index.043affff.js.map
