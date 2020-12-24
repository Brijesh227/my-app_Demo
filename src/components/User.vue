<template>
    <div>
        <h1>user page</h1>
        <p><b>Given each of the questions below, check the most appropriate response.</b></p>

        <form id="f1">
            <div>
                <p>Please enter your id <input id="inid" size="35" type="text" name="input1" rows="1" cols="50"></p>
            </div>

            <div>
                <p>1. What is your Age?</p>
                <input type="radio" id="o0" name="Q1" value="0"><lable for="o0">1-20</lable><br>
                <input type="radio" id="o1" name="Q1" value="1"><lable for="o1">21-30</lable><br>
                <input type="radio" id="o2" name="Q1" value="2"><lable for="o2">31-40</lable><br>
                <input type="radio" id="o3" name="Q1" value="3"><lable for="o3">41 and above</lable><br><br>   
            </div>
            
            <div>
                <input type="button" name="answers" value="Answer" onclick="vote()">
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name:'User'
}
</script>