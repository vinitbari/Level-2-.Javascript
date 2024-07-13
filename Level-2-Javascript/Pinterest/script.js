var arr = [
    {name: "Petals of roses", image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=3786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Animals of town", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "the crowd of city", image: "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?q=80&w=3872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "fruits of planet", image: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?q=80&w=3764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "orange peeled", image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=3337&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "web design", image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "apple juice", image: "https://images.unsplash.com/photo-1576673442511-7e39b6545c87?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "123", image: "https://plus.unsplash.com/premium_photo-1719930222062-5e63c50077cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D"},
    {name: "2", image: "https://images.unsplash.com/photo-1719056307923-a11de279d25f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D"},
    {name: "3", image: "https://images.unsplash.com/photo-1699268066895-2b5066669aff?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI4fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"},
    {name: "4", image: "https://images.unsplash.com/photo-1719583112932-d2426a3196ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D"},
    {name: "5", image: "https://images.unsplash.com/photo-1719336234156-320dafbac51a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D"},
    {name: "6", image: "https://images.unsplash.com/photo-1720401110107-bc052557f613?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"},
    {name: "7", image: "https://images.unsplash.com/photo-1718058352247-5c7ffea49b58?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8ajJ6ZWM2a2Q5Vmt8fGVufDB8fHx8fA%3D%3D"},
    {name: "8", image: "https://images.unsplash.com/photo-1600333527715-cc7f665bc332?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D"},
    {name: "9", image: "https://images.unsplash.com/photo-1546216307-269d144e0789?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D"},
    {name: "10", image: "https://plus.unsplash.com/premium_photo-1673264933056-8f2f9c87742f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D"},
    {name: "11", image: "https://images.unsplash.com/photo-1720638030243-b4049aefb656?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D"},
    {name: "12", image: "https://images.unsplash.com/photo-1693322248761-9c337e9ae5df?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D"},
    {name: "13", image: "https://images.unsplash.com/photo-1602652295575-fe1b47cff6b1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D"},
    {name: "14", image: "https://images.unsplash.com/photo-1604156789095-3348604c0f43?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D"},
    {name: "15", image: "https://images.unsplash.com/photo-1717407304660-032cd25ba06d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D"},
    {name: "16", image: "https://images.unsplash.com/photo-1576536042117-be5b8bc645b2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D"},
    {name: "17", image: "https://images.unsplash.com/photo-1482555670981-4de159d8553b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmV1dGlmdWxsJTIwZ2lybCUyMGluJTIwY3V0ZSUyMHNtaWxvZXxlbnwwfHwwfHx8MA%3D%3D"},
    {name: "18", image: "https://images.unsplash.com/photo-1719146913850-f186f411b477?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM0fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D"},
    {name: "19", image: "https://images.unsplash.com/photo-1682711274476-02947d6b4699?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM4fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D"},
    {name: "20", image: "https://images.unsplash.com/photo-1559627712-fa1c99c217a8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQzfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D"},
    {name: "21", image: "https://images.unsplash.com/photo-1719568202171-6af3622fcf01?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDYyfE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D"},
    {name: "2001", image: "https://images.unsplash.com/photo-1720353298196-107fc00f8bfb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU4fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D"},
    {name: "22", image: "https://images.unsplash.com/photo-1719328554830-29c0553bb5dc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDcwfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D"},
    {name: "23", image: "https://images.unsplash.com/photo-1720023441358-a517a4eff1dc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDgyfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D"},
    {name: "24", image: "https://plus.unsplash.com/premium_photo-1714023800301-83390690e1f0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDg4fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D"},
    {name: "25", image: "https://plus.unsplash.com/premium_photo-1675603848386-ef008aa0d25b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDk0fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D"},
    {name: "26", image: "https://images.unsplash.com/photo-1621300801324-b17755c2964d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDkzfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D"},
    {name: "27", image: "https://images.unsplash.com/photo-1719949391665-5aa96cdac658?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwMnxibzhqUUtUYUUwWXx8ZW58MHx8fHx8"},
    {name: "28", image: "https://images.unsplash.com/photo-1715614412216-244d0dfc4bde?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwMXxibzhqUUtUYUUwWXx8ZW58MHx8fHx8"},
    {name: "29", image: "https://images.unsplash.com/photo-1719216325263-9070d79336c3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyNHxibzhqUUtUYUUwWXx8ZW58MHx8fHx8"},
    {name: "30", image: "https://i.pinimg.com/236x/3c/00/e7/3c00e7e1866c7f2b783ae62f69e663c3.jpg"},
    {name: "31", image: "https://images.unsplash.com/photo-1719412689840-d809f69186fa?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzNHxibzhqUUtUYUUwWXx8ZW58MHx8fHx8"},
    {name: "32", image: "https://plus.unsplash.com/premium_photo-1661370171615-9fc8f18d8600?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2V4eSUyMGdpcmxzc3xlbnwwfHwwfHx8MA%3D%3D"},
    {name: "33", image: "https://images.unsplash.com/photo-1633787861828-4d7975d697cf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNleHklMjBnaXJsc3N8ZW58MHx8MHx8fDA%3D"},
    {name: "35", image: "https://images.unsplash.com/photo-1571103774228-4525b17eb389?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D"},
    {name: "37", image: "https://images.unsplash.com/photo-1582639590011-f5a8416d1101?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8"},
    {name: "38", image: "https://images.unsplash.com/photo-1631492211464-5f8c9d0fdc39?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHNleHklMjBnaXJsc3N8ZW58MHx8MHx8fDA%3D"},
    {name: "39", image: "https://i.pinimg.com/236x/7b/2e/a9/7b2ea904ba0b0ea86c42cf112bf87692.jpg"},
    {name: "40", image: "https://images.unsplash.com/photo-1715837484029-7b52407d3aee?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ0N3xNOGpWYkxiVFJ3c3x8ZW58MHx8fHx8"},
    {name: "41", image: "https://images.unsplash.com/photo-1515202913167-d9a698095ebf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGJldXRpZnVsbCUyMGdpcmwlMjBpbiUyMGN1dGUlMjBzbWlsb2V8ZW58MHx8MHx8fDA%3D"},
    {name: "42", image: "https://images.unsplash.com/photo-1720649718712-dff5514d5534?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"},
    {name: "43", image: "https://plus.unsplash.com/premium_photo-1719850361637-b9514dfbee5b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8"},
    {name: "44", image: "https://images.unsplash.com/photo-1720462813863-cf94aef89b38?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "45", image: "https://images.unsplash.com/photo-1720372445872-a01f2109e64b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D"},
    {name: "46", image: "https://plus.unsplash.com/premium_photo-1719934921343-b89f54604cab?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D"},
    {name: "47", image: "https://images.unsplash.com/photo-1720247522884-75029b97e0b5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3MXx8fGVufDB8fHx8fA%3D%3D"},
    {name: "48", image: "https://plus.unsplash.com/premium_photo-1718198500346-d042a3ee723f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4Mnx8fGVufDB8fHx8fA%3D%3D"},
    {name: "49", image: "https://images.unsplash.com/photo-1719146913850-f186f411b477?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4NXx8fGVufDB8fHx8fA%3D%3D"},
    {name: "50", image: "https://images.unsplash.com/photo-1720518566980-9d02b27543a2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDB8fHxlbnwwfHx8fHw%3D"},
    {name: "51", image: "https://images.unsplash.com/photo-1720409945965-e9797fa27172?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDl8fHxlbnwwfHx8fHw%3D"},
    {name: "52", image: "https://images.unsplash.com/photo-1720502812105-159e4be400bb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTV8fHxlbnwwfHx8fHw%3D"},
    {name: "53", image: "https://images.unsplash.com/photo-1720247521734-1c655133c281?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzR8fHxlbnwwfHx8fHw%3D"},
    {name: "54", image: "https://images.unsplash.com/photo-1709406158164-aa9d6e7d4c2c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzZ8fHxlbnwwfHx8fHw%3D"},
    {name: "55", image: "https://images.unsplash.com/photo-1720366252332-a86c8a11d879?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNTN8fHxlbnwwfHx8fHw%3D"},
    {name: "56", image: "https://images.unsplash.com/photo-1719054415389-b3b8a5056ce2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNjB8fHxlbnwwfHx8fHw%3D"},
    {name: "57", image: "https://images.unsplash.com/photo-1720442238401-8436967064f6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNzh8fHxlbnwwfHx8fHw%3D"},
    {name: "58", image: "https://images.unsplash.com/photo-1718154710424-d44de466c549?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxODJ8fHxlbnwwfHx8fHw%3D"},
    {name: "59", image: "https://images.unsplash.com/photo-1719968070073-c6e644a25976?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOTh8fHxlbnwwfHx8fHw%3D"},
    {name: "60", image: "https://images.unsplash.com/photo-1719861032503-225fac307c59?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMjB8fHxlbnwwfHx8fHw%3D"},
    {name: "61", image: "https://images.unsplash.com/photo-1720271845894-e786be5e4fdd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8ajJ6ZWM2a2Q5Vmt8fGVufDB8fHx8fA%3D%3D"},
    {name: "62", image: "https://images.unsplash.com/photo-1720557685843-ae2831114ec7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfGoyemVjNmtkOVZrfHxlbnwwfHx8fHw%3D"},
    {name: "63", image: "https://images.unsplash.com/photo-1720595236027-a752687cb1ab?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fGoyemVjNmtkOVZrfHxlbnwwfHx8fHw%3D"},
    {name: "64", image: "https://images.unsplash.com/photo-1720411210785-656d611008ab?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM2fGoyemVjNmtkOVZrfHxlbnwwfHx8fHw%3D"},
    {name: "65", image: "https://images.unsplash.com/photo-1720561367352-67b9bbc5dea2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQyfGoyemVjNmtkOVZrfHxlbnwwfHx8fHw%3D"},
    {name: "66", image: "https://images.unsplash.com/photo-1720432958843-ab96e41b1895?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ1fGoyemVjNmtkOVZrfHxlbnwwfHx8fHw%3D"},
    {name: "67", image: "https://images.unsplash.com/photo-1720295729726-35197d1fe325?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY1fGoyemVjNmtkOVZrfHxlbnwwfHx8fHw%3D"},
    {name: "68", image: "https://plus.unsplash.com/premium_photo-1669612905191-48c67547f9a0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D"},
    {name: "69", image: "https://images.unsplash.com/photo-1559627712-fa1c99c217a8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQzfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D"},
    {name: "70", image: "https://images.unsplash.com/photo-1720500986013-c58991a3f48d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUwfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D"},
    {name: "71", image: "https://images.unsplash.com/photo-1717092068554-675b396555be?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D"},
    {name: "72", image: "https://plus.unsplash.com/premium_photo-1680979671744-0bdc95bf53b8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"},
    {name: "73", image: "https://images.unsplash.com/photo-1720638030243-b4049aefb656?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D"},
    {name: "74", image: "https://images.unsplash.com/photo-1699268066886-f121a2148610?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"},
    {name: "75", image: "https://images.unsplash.com/photo-1720122207974-0e950e7deb05?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDgxfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D"},
    {name: "76", image: "https://images.unsplash.com/photo-1719267308060-1d109b22f4f4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDg5fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"},
    {name: "77", image: "https://images.unsplash.com/photo-1720572662063-05c3cf2ce0f6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQxfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D"},
    {name: "78", image: "https://images.unsplash.com/photo-1720622002888-6859f767f03b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D"},
    {name: "79", image: "https://images.unsplash.com/photo-1699268077472-f20bfa783620?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDgxfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"},
    {name: "80", image: "https://images.unsplash.com/photo-1719216323962-ea9b315ad9bd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY5fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D"},
    {name: "81", image: "https://images.unsplash.com/photo-1690692791471-5c393267aa9f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwNXxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8"},
    {name: "82", image: "https://plus.unsplash.com/premium_photo-1700502418045-8bf126970f56?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQzfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"},
    {name: "83", image: "https://images.unsplash.com/photo-1687246493079-1361abc6d875?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D"},
    {name: "84", image: "https://plus.unsplash.com/premium_photo-1700124504129-02393b281f06?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0OXxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8"},
    {name: "85", image: "https://plus.unsplash.com/premium_photo-1673213853627-5ece2b5daf17?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU3fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"},
    {name: "86", image: "https://images.unsplash.com/photo-1631793945537-b8a496b97edf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDk1fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D"},
    {name: "87", image: "https://images.unsplash.com/photo-1688587571105-c770775b2b42?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0NnxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8"},
    {name: "88", image: "https://images.unsplash.com/photo-1720449916410-c99d41dce18e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY1fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D"},
    {name: "89", image: "https://images.unsplash.com/photo-1720364699655-2f7403893b9c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D"},
    {name: "90", image: "https://plus.unsplash.com/premium_photo-1680391379670-5907f52bb0d9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyOHxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8"},
    {name: "91", image: "https://images.unsplash.com/flagged/photo-1719403354111-95ac8b101510?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ1fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D"},
    {name: "92", image: "https://images.unsplash.com/photo-1718147549470-eaab766d2c7b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyNnxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8"},
    {name: "93", image: "https://images.unsplash.com/photo-1660223703419-c362eec32b28?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8SnBnNktpZGwtSGt8fGVufDB8fHx8fA%3D%3D"},
    {name: "95", image: "https://images.unsplash.com/photo-1702656224713-3d93bc352190?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExOXxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8"},
    {name: "96", image: "https://images.unsplash.com/photo-1719568731877-11f8b37c043b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDYwfE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D"},
    {name: "97", image: "https://images.unsplash.com/photo-1719922327451-1cc6d5f1db2e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ4fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D"},
    {name: "98", image: "https://images.unsplash.com/photo-1720161263981-84281892ee4b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D"},
    {name: "99", image: "https://images.unsplash.com/photo-1573273873987-b9bd6ce9acca?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY1fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"},
    {name: "100", image: "https://images.unsplash.com/photo-1719425061967-391c2c871898?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"},
    {name: "101", image: "https://images.unsplash.com/photo-1570405575010-ce87f53136cc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8RnpvM3p1T0hONnd8fGVufDB8fHx8fA%3D%3D"},
    {name: "102", image: "https://images.unsplash.com/photo-1718162145034-7a7d7606c723?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1M3xDRHd1d1hKQWJFd3x8ZW58MHx8fHx8"},
    {name: "103", image: "https://plus.unsplash.com/premium_photo-1664187387633-10b5d48e1c97?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8X2hiLWRsNFEtNFV8fGVufDB8fHx8fA%3D%3D"},
    {name: "104", image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fHhqUFI0aGxrQkdBfHxlbnwwfHx8fHw%3D"},
    {name: "105", image: "https://images.unsplash.com/photo-1619520167576-8dd80b770fa4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfF9oYi1kbDRRLTRVfHxlbnwwfHx8fHw%3D"},
    {name: "106", image: "https://images.unsplash.com/photo-1667868274692-555b1af1ec91?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUxfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"},
    {name: "107", image: "https://images.unsplash.com/photo-1720010943528-d709a0857650?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDYyfFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D"},
    {name: "108", image: "https://images.unsplash.com/photo-1606059100110-4230429584fe?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8Qm4tRGpyY0Jyd298fGVufDB8fHx8fA%3D%3D"},
    {name: "109", image: "https://images.unsplash.com/photo-1712673535607-d3586895d914?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3NXxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8"},
    {name: "110", image: "https://plus.unsplash.com/premium_photo-1664299100081-dd35f62e09a8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNleHl8ZW58MHx8MHx8fDA%3D"},
    {name: "111", image: "https://images.unsplash.com/photo-1705065647778-6dcb444ecf44?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D"},
    {name: "112", image: "https://images.unsplash.com/photo-1439778615639-28529f7628bc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"},
    {name: "113", image: "https://plus.unsplash.com/premium_photo-1661297485356-2497102824d0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHNleHl8ZW58MHx8MHx8fDA%3D"},
    {name: "114", image: "https://images.unsplash.com/photo-1606752444917-b56c23267b15?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDkwfFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D"},
    {name: "115", image: "https://plus.unsplash.com/premium_photo-1664369473114-9146ca35bd72?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8X2hiLWRsNFEtNFV8fGVufDB8fHx8fA%3D%3D"},
    {name: "116", image: "https://images.unsplash.com/photo-1563707456099-b7ccdb632b64?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUyfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"},
    {name: "117", image: "https://images.unsplash.com/photo-1565294124524-200bb738cdb7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdCUyMHNleHklMjBnaXJsc3xlbnwwfHwwfHx8MA%3D%3D"},
    {name: "118", image: "https://images.unsplash.com/photo-1688597168861-b2d5f521cca6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmV1dGlmdWxsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D"},
    {name: "119", image: "https://images.unsplash.com/photo-1644775510562-eb0575e6c10e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGhvdCUyMHNleHklMjBnaXJsc3xlbnwwfHwwfHx8MA%3D%3D"},
    {name: "120", image: "https://images.unsplash.com/photo-1720419439362-ad41df141d8b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDcwfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"},
    {name: "121", image: "https://images.unsplash.com/photo-1495063378081-52411c3eedf1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGJldXRpZnVsbCUyMGdpcmwlMjBpbiUyMGN1dGUlMjBzbWlsZXxlbnwwfHwwfHx8MA%3D%3D"},
    {name: "122", image: "https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmV1dGlmdWxsJTIwZ2lybCUyMGluJTIwY3V0ZSUyMHNtaWxlaW4lMjBpbmRpYSUyMHNhcmllc3xlbnwwfHwwfHx8MA%3D%3D"},
    {name: "123", image: "https://images.unsplash.com/photo-1554287898-906a6586d6ac?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8Qm4tRGpyY0Jyd298fGVufDB8fHx8fA%3D%3D"},
    {name: "124", image: "https://images.unsplash.com/photo-1477591546808-36d4a193cbc2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGJldXRpZnVsbCUyMGdpcmwlMjBpbiUyMGN1dGUlMjBzbWlsZWluJTIwaW5kaWElMjBzYXJpZXN8ZW58MHx8MHx8fDA%3D"},
    {name: "125", image: "https://images.unsplash.com/photo-1630567804054-3a8c5916d1db?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHxob3QlMjBzZXh5JTIwZ2lybHN8ZW58MHx8MHx8fDA%3D"},
    {name: "126", image: "https://plus.unsplash.com/premium_photo-1687826541568-1b91002a6773?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHNleHklMjBnaXJsc3N8ZW58MHx8MHx8fDA%3D"},
    {name: "127", image: "https://images.unsplash.com/photo-1532664189809-02133fee698d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJldXRpZnVsbCUyMGdpcmwlMjBpbiUyMGN1dGUlMjBzbWlsZWluJTIwaW5kaWElMjBzYXJpZXN8ZW58MHx8MHx8fDA%3D"},
    {name: "128", image: "https://images.unsplash.com/photo-1583900985737-6d0495555783?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwc2V4eSUyMGdpcmxzfGVufDB8fDB8fHww"},
    {name: "129", image: "https://images.unsplash.com/photo-1599948065312-ad2cf7284639?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ2fFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D"},
    {name: "130", image: "https://images.unsplash.com/photo-1593766827228-8737b4534aa6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNyaWNrZXR8ZW58MHx8MHx8fDA%3D"},
    {name: "131", image: "https://images.unsplash.com/photo-1692709891331-f15a684444c2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGJldXRpZnVsbCUyMGdpcmx8ZW58MHx8MHx8fDA%3D"},
    {name: "132", image: "https://images.unsplash.com/photo-1492632503949-a31d9972b400?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdCUyMHNleHklMjBnaXJscyUyMHhueHglMjBwb3JufGVufDB8fDB8fHww"},
    {name: "133", image: "https://images.unsplash.com/photo-1517330357046-3ab5a5dd42a1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5kaWF8ZW58MHx8MHx8fDA%3D"},
    {name: "134", image: "https://images.unsplash.com/photo-1456885284447-7dd4bb8720bf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJldXRpZnVsbCUyMGdpcmwlMjBpbiUyMGN1dGUlMjBzbWlsZXxlbnwwfHwwfHx8MA%3D%3D"},
    {name: "135", image: "https://plus.unsplash.com/premium_photo-1661629259850-9a893425f1f5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fHNleHl8ZW58MHx8MHx8fDA%3D"},
    {name: "136", image: "https://images.unsplash.com/photo-1719306106801-7f54f07ecc1c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQyfE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D"},
    {name: "137", image: "https://images.unsplash.com/photo-1524638431109-93d95c968f03?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fGJldXRpZnVsbCUyMGdpcmwlMjBpbiUyMGN1dGUlMjBzbWlsb2V8ZW58MHx8MHx8fDA%3D"},
    {name: "138", image: "https://images.unsplash.com/photo-1702529939203-04c666ee2b7f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1MXxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8"},
    {name: "139", image: "https://images.unsplash.com/photo-1720342505089-4c652b933c9a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDkwfGoyemVjNmtkOVZrfHxlbnwwfHx8fHw%3D"},
    {name: "140", image: "https://images.unsplash.com/photo-1518518873111-6ca469aa4560?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGJldXRpZnVsbCUyMGdpcmwlMjBpbiUyMGN1dGUlMjBzbWlsb2V8ZW58MHx8MHx8fDA%3D"},
    {name: "141", image: "https://images.unsplash.com/photo-1719856985083-dd1abdb21990?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D"},
    {name: "142", image: "https://images.unsplash.com/photo-1719568731877-11f8b37c043b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDYwfE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D"},
    {name: "143", image: "https://images.unsplash.com/photo-1698370681016-fb71a29f952c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3OXxNOGpWYkxiVFJ3c3x8ZW58MHx8fHx8"},
]

function showTheCards(){
    var clutter = "";
    arr.forEach(function(obj){
        clutter += `<div class="box">
        <img class="cursor-pointer" src="${obj.image}" alt="image">
        <div class="caption">Lorem ipsum </div>
        </div>`;
    })

    document.querySelector(".container")
    .innerHTML = clutter;
}

function handleSearchFunctionality(){
    var input = document.querySelector("#searchinput");
    

    input
    .addEventListener("focus", function(){
        document.querySelector(".overlay").style.display = "block";
    })

    input
    .addEventListener("blur", function(){
        document.querySelector(".overlay").style.display = "none";
    })

    input
    .addEventListener("input", function(){
        const filteredArray = arr.filter(obj => obj.name.toLowerCase().startsWith(input.value));
        var clutter = "";
        filteredArray.forEach(function(obj){
            clutter += `<div class="res flex px-8 py-3">
            <i class="ri-search-line font-semibold mr-5"></i>
            <h3 class="font-semibold">${obj.name}</h3>
        </div>`
        })

        document.querySelector(".searchdata").style.display = "block";
        document.querySelector(".searchdata").innerHTML = clutter;
    })
}

handleSearchFunctionality();
showTheCards();