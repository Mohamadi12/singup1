const express=require('express')
const listeSchema=require('../model/liste')

exports.getAll=async (req,res)=>{
    try {
        const allListe= await listeSchema.find({})
        res.status(200).json({msg:`Voici la liste`,allListe})
    } catch (error) {
        console.log(error.message)
        res.status(500).json({msg:error.message})
    }
}

exports.getOne=async (req,res)=>{
    try {
        const{id}=req.params
        const listee= await listeSchema.findById(id)
        res.status(200).json({msg:`Le nom`,listee})
    } catch (error) {
        console.log(error.message)
        res.status(500).json({msg:error.message})
    }
}

exports.ajout=async (req,res)=>{
    try {
        if(
            !req.body.name||
            !req.body.username||
            !req.body.email||
            !req.body.password
            ){
                res.status(400).json({msg:`Validez tout les champs`})
            }
        const ajouter= new listeSchema(req.body)
        await ajouter.save()
        res.status(200).json({msg:`Ajouter à la liste`})
    } catch (error) {
        console.log(error.message)
        res.status(500).json({msg:error.message})
    }
}

exports.update=async (req,res)=>{
    try {
        const{id}=req.params
        const updated= await listeSchema.findByIdAndUpdate(id,{$set:{...req.body}})
        res.status(200).json({msg:`Update liste`})
    } catch (error) {
        console.log(error.message)
        res.status(500).json({msg:error.message})
    }
}

exports.remove=async (req,res)=>{
    try {
        const{id}=req.params
        const updated= await listeSchema.findByIdAndDelete(id)
        res.status(200).json({msg:`Delete successfull`})
    } catch (error) {
        console.log(error.message)
        res.status(500).json({msg:error.message})
    }
}