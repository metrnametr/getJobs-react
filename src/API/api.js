class API{

    getJobs = async (currentPage, pageSize) =>{
        const data = await fetch(`http://91.92.136.144:8800/api/Vacancies?page=${currentPage}&pageSize=${pageSize}`)
        return data.json()
    }

    getJobById = async (id) => {
        const jobInfo = await fetch(`http://91.92.136.144:8800/api/Vacancies/${id}`)
        return jobInfo.json()
    }

    postJob = async (data) => {
        fetch(`http://91.92.136.144:8800/api/Vacancies`,{
            method: 'post',
            header:{
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: JSON.stringify(data)
        })
            .then(res => console.log(res))
            .catch(res => console.log(res)) 
    }
}

export default API;